import React, { useState } from 'react'
import './app.css'

const App = () => {


  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }
 const [bgColor, setBgColor] = useState(getRandomLightColor());  
 const[count,setCount] = useState(0);
 
  return (
    <div className='surya' style={{backgroundColor:bgColor}} >
      <button onClick={()=> {setBgColor(getRandomLightColor()) ; setCount(count+1)}}>I can generate random colors</button>
      <h5>you have clicked the button {count} times</h5>
    </div>
  )
}

export default App

