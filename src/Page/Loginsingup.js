import React from 'react'
import './Css/Loginsingup.css'

function Loginsingup() {
  return (
    <div className='loginsignup'>
    <div className="login_container">
      <h1>Sign Up</h1>
      <div className="input_field">
        <input type="Name" placeholder='Name' />
        <input type="Email" placeholder='Email' />
        <input type="Password" placeholder='Passworl' />
        <button>Continue</button>
      </div>
      
      <p className='accout_alr'>Already have a account? <span className='spn'> <b>Login here</b></span></p>
      <div className="policy">
        <input type="checkbox" name='' id='' />
        <p>By Continue, I agree to the terms of use & privacy policy</p>
      </div>
    </div>
    </div>
  )
}

export default Loginsingup
