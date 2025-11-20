import React from 'react';
import coffee from './cofee.png';
import sides from './sidesnbites.jpg';
import './Menu.css'
import { createBrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Coffee from './Coffee';
import Sidesnbites from './Sidesnbites';
const router2=createBrowserRouter([

  {path:"/Coffee",
    element:<div>
      <Navbar/>
      <Coffee/>
    </div>
  },
  {
    path:"/Sidesnbites",
    element:<div>
      <Navbar/>
      <Sidesnbites/>
    </div>
  }
])
const Menu = () => {
  return (
    <div className='menu-side'>
        <NavLink to="/menu/coffee" className="left-box">
        <div className="img para"><img className='div' src={coffee} alt="" /></div>
         <div className="para">  <p>Coffee for you :)</p></div>
        </NavLink>
        <NavLink to="/menu/sidesnbites" className="right-box">
      <div className="img para"><img className='div' src={sides} alt="" /></div>
       <div className="para"> <p>Sides and Bites</p></div>
        </NavLink>

    </div>
  )
}

export default Menu
