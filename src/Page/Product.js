import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrum/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import Discriptionpage from '../Component/Discription/Discriptionpage';
import Realatedproduct from '../Component/Realatedproduct/Realatedproduct';

function Product() {
  const { all_product } = useContext(Shopcontext);
  const {productId} = useParams();

  const product = all_product.find((e) => e.id === Number(productId))
  
  return (
    <div>
    <Breadcrum product={product}/>
    <ProductDisplay product={product}/>
    <Discriptionpage/>
    <Realatedproduct/>
    </div>
  )
}

export default Product
