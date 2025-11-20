import React from 'react'
import logo from'./logo.png'
import './Home.css'
const Home = () => {
  return (
    <div className='homepage'>
       <div className="left-text">Let your affinity for caffeine be satisfied with every perfect sip</div>
       <div className="logo">
        <img className='logo' src={logo} alt="logo" />
       </div>
    </div>
  )
}

export default Home
