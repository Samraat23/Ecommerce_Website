import React from 'react'
import './Herosection.css'
import hand from '../Component/Assets/hand_icon.png'
import heroimg from '../Component/Assets/hero_image.png'
import arrow from '../Component/Assets/arrow.png'

function Herosection() {
  return (
    <> 
      <div className='hero'>
        <div className="herosection">
          <div className="left_side">
            <p>NEW ARRIVALS ONLY</p>
            <div className='content'>
                <h1>new<span><img className='handimg' src={hand} /></span><br />
                 collection <br /> for everyone</h1>
            </div>
            
            <button className='btn_letst'>Letest Collection <span><img src={arrow}/></span></button>
          </div> 
         <div className="right_side">
            <img className='heoimg' src={heroimg }/>

         </div> 
        </div>
        </div>

    </>
      
  )
}

export default Herosection
