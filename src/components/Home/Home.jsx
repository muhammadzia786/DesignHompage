import React from 'react'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import "./home.css"

const Home = () => {
  return (
    <>
    <div className='home_section'>
   
    <Sidebar />
    
    <div className='desc5'>  <Header /> </div>
    </div>
    </>
  )
}

export default Home