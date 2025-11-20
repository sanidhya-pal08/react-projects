import React from 'react';
import effoc from './cofee.png';
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div className='container'>
      <div className="left-text">
        <p>Caffinity was born from a simple obsession  to serve coffee that feels like a moment, not a routine.</p> <br /> 
        <p>What began as a love for the aroma of freshly brewed beans turned into a mission: to create a space where every cup satisfies your deepest caffeine affinity  your Caffinity..</p> <br />
        <p>Whether you’re here for your first cup of the day or a side treat that completes it, Caffinity is where taste, warmth, and comfort meet.</p>
        </div>
      <div className="right-photo">
        <img id='photu' src={effoc} alt="coffee photo" />
      </div>
    </div>
  )
}

export default AboutUs
