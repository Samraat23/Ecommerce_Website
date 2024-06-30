import React from 'react'
import './Offer.css'
import eclusive from '../Assets/exclusive_image.png'

function Offer() {
  return (
    <div className='offer'>
    <div className="right_sideoff">
       <h2>Exclusive <br /> Offers For You</h2>
       <p>ONLY ON BEST SELLERS PRODUCTS</p>
      <button>Check Now</button>
    </div>
    <div className="left_sideoff">
        <img src={eclusive } />
    </div>
     

    </div>
  )
}

export default Offer
