import React from 'react'
import Herosection from './Herosection'
import Popular from '../Component/Popular/Popular'
import Offer from '../Component/Offer/Offer'
import Newcollection from '../Component/Newcollection/Newcollection'
import Subscribe from '../Component/Subscribe/Subscribe'
function Shop() {
  return (
    <div>
      <Herosection/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      <Subscribe/>
    </div>
  )
}

export default Shop
