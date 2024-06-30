import React from 'react'
import './NEwcollection.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

function Newcollection() {
  return (
    <div className='new_collection'>
      <h1>NEW COLLECTION</h1> <hr />
      <div className='collection_item'>
    {new_collection.map((item , i) =>{
    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
})}
      </div>
    </div>
  )
}

export default Newcollection
