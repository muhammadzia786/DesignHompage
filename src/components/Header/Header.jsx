import React, { useState } from 'react'
import "./header.css"
import { Navbar } from "react-bootstrap"
import { BiUser } from "react-icons/bi"
import { IoMdArrowDropdown } from "react-icons/io"
import Noti from "../../assets/images/noti.png"
import Profile from "../../assets/images/profile.png"
import UserInputSection from '../UserInputSection'
import UserOutputSection from '../UserOutputSection'

const Header = () => {

  const [showLogOut, setShowLogOut] = useState(false)
  const [isActive, setIsActive] = useState("2")

  const handelLogOut = () => {
    setShowLogOut(!showLogOut)
  }

  return (
    <>

      <div className='control_views'>
        <div className='nav_bar_wrapper'>
          <div className='login_user_content'>
            <div className='login_user_text'>LOS Tactics</div>
            <div className='login_user_text'>User Input</div>

          </div>
          <div className='user_profile_box'>
            <div className='login_user_profile_sec' onClick={() => handelLogOut()}>
              <div className='notification_div'>
                <img src={Noti} />
              </div>
              <div className='profile_div'>
                <div className='login_user_img_div'><img className='login_user_img' src={Profile} /></div>
                <div className='login_user_name'>Iris Interface</div>

              </div>

            </div>
            {showLogOut && <div className='open_user_profile_sec'>
              <div className='open_card_heading'>LOS Tactics</div>
              <div onClick={() => setIsActive("1")} className={isActive == "1" ? 'open_card_text_bg' : "open_card_text"}>New Calculation</div>
              <div onClick={() => setIsActive("2")} className={isActive == "2" ? 'open_card_text_bg' : "open_card_text"}>User Input </div>
              <div onClick={() => setIsActive("3")} className={isActive == "3" ? 'open_card_text_bg' : "open_card_text"}>Result</div>
            </div>}
          </div>
        </div>
        {/* <UserInputSection /> */}
        <UserOutputSection />
      </div>




    </>
  )
}

export default Header
