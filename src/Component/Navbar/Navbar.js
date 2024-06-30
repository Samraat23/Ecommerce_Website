import React, { useContext } from 'react'
 import '../Navbar.css'
import logo from '../Assets/logo.png' 
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../Context/ShopContext'

function Navbar() {
  const {gettotalitemincart} = useContext(Shopcontext)
  return (
    <div className='navbar'>
     <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
     </div>
     <div className='nav_link'>
       <Link className='navitem' to="/"> Shop</Link>
       <Link className='navitem'  to="Men"> Mens</Link>
       <Link className='navitem'  to="Women"> Womens</Link>
       <Link className='navitem'  to="Kid"> Kids</Link>
     </div>
      <div className='login_cart'>
        <Link to='Login'><button>Login</button></Link> 
       <Link to='Cart'><img src={cart_icon}  /></Link> 
        <div className='nav_cart_count'>{gettotalitemincart()}</div>
      </div>
    </div>
  )
}

export default Navbar
