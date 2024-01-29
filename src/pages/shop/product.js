import React, { useContext } from 'react'
import {ShopContext} from "../../context/shop-context";

export const Product  = (props) => {
  const {id , productNAme , price ,productImage} = props.data;

  const  {addToCart,cartItems} = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div>
       <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productNAme}</b>
        </p>
        <p> RS {price} / kg </p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
         Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
    
    </div>
  );
};

