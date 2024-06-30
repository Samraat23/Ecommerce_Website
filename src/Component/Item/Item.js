import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0 , 0)} src={props.image} alt="image" /></Link>
     <p>{props.name}</p>
     <div className='price'>
     <div className="new_pricw">
        ${props.new_price}
     </div>
     <div className="old_price">
       ${props.old_price}
     </div>
     </div>
    </div>
  )
}

export default Item
