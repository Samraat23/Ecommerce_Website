import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from '../Assets/star_icon.png'
import start_haf from '../Assets/star_dull_icon.png'
import { Shopcontext } from '../../Context/ShopContext';

function ProductDisplay(props) {
  const {product} = props;
  const { addToCart} = useContext(Shopcontext);
  return (
    <div className='product_display'>
    <div className="product_dis_container">
    <div className="product_dis_left">
        <div className="product_disp_imglist">
            <img className='imagelist' src={product.image} alt=""  />
            <img className='imagelist' src={product.image} alt=""  />
            <img className='imagelist' src={product.image} alt=""  />
            <img className='imagelist' src={product.image} alt=""  />
        </div>
        <div className="product_dis_mainimg">
            <img src={product.image} alt="" />
        </div>
    </div>
    <div className="poduct_dis_right">
        <div className="product_name">
            <h1>{product.name}</h1>
        </div>
        <div className="product_rev_start">
           <div className="review_start">
              <img src={start_icon} alt="" />
             <img src={start_icon}  alt="" />
              <img src={start_icon}  alt="" />
              <img src={start_icon}  alt="" />
              <img src={start_haf} alt="" />
           </div>
             <div className="total_review">
                 <p>(122)</p>
              </div>
        </div>
              <div className="product_price">
                 <p className='oldprice'>${product.old_price}</p>
                 <p className='newprice'>${product.new_price}</p>
               </div>
               <div className="product_discription">
                <p>A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details </p>
               </div>
               <div className="product_size_detail">
                <h1>Select Size</h1>
                <div className="procduct_size_flex">
                    <div className='size_box'>S</div>
                    <div className='size_box'>M</div>
                    <div className='size_box'>L</div>
                    <div className='size_box'>XL</div>
                    <div className='size_box'>XXL</div>
                </div>
               </div>
               <button className='addtocart' onClick={()=> {addToCart(product.id)}}>ADD TO CART</button>
               <p className='product_right_category'><span>Category : <span>Women , T-Shirt , Crop Top</span></span></p>
               <p className='product_right_category'><span>Tag: <span>Modern , Latest</span></span></p>
               

    </div>
    </div>


    </div>
  )
}

export default ProductDisplay
