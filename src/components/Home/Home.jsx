import React from 'react'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import "./home.css"
import TechnologySection from "../TechnologySection/index"
import UserInputSection from "../UserInputSection/index"


const Home = () => {
  return (
    <>
      <div className='home_section'>
        <Sidebar />
        <div className='desc5'>  <Header />
          <UserInputSection />
          {/* <TechnologySection /> */}

        </div>

      </div>
    </>
  )
}

export default Home