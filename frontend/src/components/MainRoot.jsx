import React from 'react'
import Navbar from './Navbar/Navbar'
import {Outlet} from "react-router-dom"
import Footer from './Footer'

const MainRoot = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainRoot
