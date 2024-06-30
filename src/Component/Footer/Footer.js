import React from 'react'
import './Footer.css'
import lodo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='footer'>
      <div className="logo_name">
        <img src={lodo}/>
        <h1>SHOPPER</h1>
      </div>
      <div className="footer_content">
        <Link className='link_fotter'>Company</Link>
        <Link className='link_fotter'>Products</Link>
        <Link className='link_fotter'>Offices</Link>
        <Link className='link_fotter'>About</Link>
        <Link className='link_fotter'>Contact</Link>
      </div>
      <div className="social_icon">
        <img src={require('../Assets/instagram_icon.png')} alt="" />
        <img src={require('../Assets/pintester_icon.png')} alt="" />
        <img src={require('../Assets/whatsapp_icon.png')} alt="" />
      </div><hr className='hrcontent' />
    </div>
    <div className='copyright'>
        <p>Copyright @ 2024 - All Right Reserved</p>
       </div>
    </>
  )
}

export default Footer
