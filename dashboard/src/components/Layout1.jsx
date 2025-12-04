import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import "./Layout1.css"

function Layout1() {
  return (
    <div 
      style={{
        height:"100vh",
        width:"100vw",
        backgroundColor:"black",
        display:"flex"
      }}
    >
      
      {/* Sidebar Section */}
      <div className="sidebar-box">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <Outlet />
      </div>

    </div>
  )
}

export default Layout1
