import React, { useContext } from 'react';
import { Shopcontext } from '../Context/ShopContext';
import drop from '../Component/Assets/dropdown_icon.png';
import Item from '../Component/Item/Item';
import '../Page/Css/Shopcategory.css'


function Shopcategory(props) {
  const { all_product } = useContext(Shopcontext);

  return (
    <div className='shop_category'>
      <img className='bannerimg' src={props.banner} alt="Banner" />
      <div className="shop_categoryinshort">
        <p>
        <span className='list'>Showing 1-12</span>
        <span className='showproduct'>out of 36 products</span>
        </p>
        <p className='drop_btn'>Sort by <span><img src={drop} alt="Dropdown" /></span></p>
      </div>
      <div className='category_productitem'>
        {all_product.map((item , i) => {
          if (item.category === props.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <button className='explore'>Explore More</button>
    </div>
  );
}

export default Shopcategory;
