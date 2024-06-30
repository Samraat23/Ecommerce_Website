import React from 'react'
import './Subscribe.css'

function Subscribe() {
  return (
    <div className='subscribe'>
     <h1>Get Exclusive Offers On Email</h1>
     <p>Subscribe to our newslatter and stay update</p>
     <div className='input_text'>
        <input type="text" placeholder='Your Email Id'/>
        <button>Subscribe</button>
     </div>
    </div>
  )
}

export default Subscribe
