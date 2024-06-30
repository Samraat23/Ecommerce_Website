import React from 'react'
import './Realatedproduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

function Realatedproduct() {
  return (
    <div className='relatedproduct'>
      <div className="relatedpro_heading">
        <h1>Realated Product</h1><hr className='product_healding' />
      </div>
      <div className="relatedproduct_item">
        {data_product.map((item , i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />    
        })}
      </div>
    </div>
  )
}

export default Realatedproduct
