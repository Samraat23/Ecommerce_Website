import React, { createContext, useState } from "react";
import all_product from '../Component/Assets/all_product'

  export const Shopcontext = createContext(null)

  const getdefalutcart = () =>{
    let cart = {};
    for(let i = 0; i<all_product.length+ 1 ; i++){
    cart[i] = 0;
  }
  return cart;
  }

  

  const ShopcontextProvider = (props) =>{

    const [cartitem , setCartitem] = useState(getdefalutcart())
   // const [cartItems , setCartItems] = useState(getdefalutcart());

   // console.log(cartItems);

     const addToCart = (ItemId) => {
             setCartitem((prev) =>({...prev,[ItemId]:prev[ItemId]+1}))
             console.log(cartitem);
     }

     const removeTOCart = (ItemId) =>{
        setCartitem((prev) => ({...prev,[ItemId]:prev[ItemId]-1}))
     } 


     const gettotalamout = () =>{
            let totalamount = 0;
            for(const item in cartitem)
               {
                  if(cartitem[item]> 0)
                     {
                        let totalinfo = all_product.find((product) => product.id === Number(item))
                        totalamount += totalinfo.new_price * cartitem[item];
                     }
               }
               return totalamount;
         }

         const gettotalitemincart = () => {
            let totalitemcart = 0;

            for(const item in cartitem)
               {
                  if(cartitem[item]>0)
                     {
                        totalitemcart += cartitem[item];
                     }
               }
               return totalitemcart;

         }


     
      const contextvalue = { all_product ,gettotalamout, cartitem , addToCart , removeTOCart, gettotalitemincart};
         return(
             <Shopcontext.Provider value={contextvalue}>
                {props.children}
             </Shopcontext.Provider>
         )
  }

  export default ShopcontextProvider;