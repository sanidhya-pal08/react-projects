import React from 'react'
import './Coffee.css'
const Coffee = () => {
  return (
  <div className='topcontainer'>
      <div className="lefttt">
        <h5>Classics</h5> <br />
        <ul className='list'>
            <li>Espresso — Rich, bold, straight to the point. 5$</li><br />
            <li>Americano — Smooth black coffee with depth. 6$</li><br />
            <li>Cappuccino — Balanced espresso with creamy foam. 6$</li><br />
            <li>Latte — Silky blend with warm milk. 7$</li>
        </ul>
      </div>
      <div className="righttt">
        <h5>Special Brews</h5> <br />
        <ul className='list'>
            <li>Mocha — Chocolate meets coffee, perfectly. 10$</li><br />
            <li>Caramel Latte — Sweet, smooth, comforting. 10$</li><br />
            <li>Vanilla Cold Brew — Refreshingly bold with a vanilla touch. 12$</li><br />
            <li>Hazelnut Cappuccino — Nutty aroma, creamy feel. 14$</li>
        </ul>
      </div>
    </div>
  )
}

export default Coffee
