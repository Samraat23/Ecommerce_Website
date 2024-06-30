import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
import './Cartitem.css'

function Cartitem() {
  const {all_product , cartitem ,removeTOCart,gettotalamout} = useContext(Shopcontext)
  return (
    <div className='cartitem'>
    <div className="cartItem_main_formate">
      <p>Product</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
    <hr />
    {all_product.map((e) =>{
      if(cartitem[e.id]> 0)
      {
          return <div>
          <div className="cartitem_formate cartItem_main_formate">
             <img src={e.image} alt=""  className='cartitem_imagesize'/>
             <p>{e.name}</p>
             <p>${e.new_price}</p>
             <button className='item_quantity'>{cartitem[e.id]}</button>
             <p>{e.new_price*cartitem[e.id]}</p>
             <img className='cart_icon_formate' src={remove_icon} alt="" onClick={() => {removeTOCart(e.id)}} />
          </div>
          <hr />
          </div>
      }
    })}

    <div className="cartitem_down">
      <div className="cartitem_total">
        <h1>cart Totals</h1>
        <div>
          <div className="cartitems_total-item">
            <p>Subtatal</p>
            <p>${gettotalamout()}</p>
          </div>
          <hr />
          <div className="cartitems_total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems_total-item">
            <h3>Total</h3>
            <h3>${gettotalamout()}</h3>
          </div>
        </div>
        <button >PROCEED TO CHECKOUT</button>
      </div>
      <div className="CARTITEM_PROMO_CODE">
        <p>If you have a promo code , please enter here</p>
        <div className="cartitem_promobox">
          <input type="text" placeholder='Promo code' />
          <button>Submit</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cartitem
