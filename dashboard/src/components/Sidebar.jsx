import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      
        <NavLink to='/user'  className={({isActive}) => isActive? 'dabba active-link':"dabba"}>USER</NavLink>
        <NavLink to='/' end className={({isActive}) => isActive? 'dabba active-link':"dabba"}>DASHBOARD</NavLink>
          <NavLink to='/orders'  className={({isActive}) => isActive? 'dabba active-link':"dabba"}>ORDERS</NavLink>
         <NavLink to='/settings'  className={({isActive}) => isActive? 'dabba active-link':"dabba"}>SETTINGS</NavLink>
      
    </div>
  )
}

export default Sidebar
