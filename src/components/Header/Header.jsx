import React, { useState } from 'react'
import "./header.css"
import {Navbar} from "react-bootstrap"
import {BiUser} from "react-icons/bi"
import {IoMdArrowDropdown} from "react-icons/io"

const Header = () => {

  const [showLogOut, setShowLogOut] = useState(false)

  const handelLogOut = () =>{
    setShowLogOut(!showLogOut)
  }
    return (
       <>
        <div className='header_section'>
        
  <Navbar expand="lg" variant="light" bg="#fff">
    <div className='header_content'>
      <Navbar.Brand className='header_logo' href="#">
          <div className='logo'>LOS Tactics</div>
          </Navbar.Brand>
          <div className='header_profile'>
              <div>Ali</div>
              <div onClick={handelLogOut} className='boy_icon'><BiUser /><IoMdArrowDropdown /></div>

              {showLogOut ? <div className='profile_option'>Logout</div> : null}
          </div>
    </div>
  </Navbar>
            
            </div>
       </>
    )
}

export default Header
