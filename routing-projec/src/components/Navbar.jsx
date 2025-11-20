import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="heading">Caffinity</div>
      <div className="pages">
        <div  ><NavLink to='/'  className={({isActive}) => isActive? 'home active-link':"home"}>Home</NavLink></div>
        <div ><NavLink to='/Menu'  className={({isActive}) => isActive? 'menu active-link':"menu"}>Menu</NavLink></div>
        <div ><NavLink to='/aboutus'  className={({isActive}) => isActive? 'abus active-link':"abus"}>About Us</NavLink></div>
      </div>
    </div>
  )
}

export default Navbar
