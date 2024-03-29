import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'
import {CartItem } from './cart-item'
import "./cart.css";
import {useNavigate} from "react-router-dom"
export const Cart = () => {
  const {cartItems,getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  const handlecheckout = () =>
  {
    
    document.write("Your Order is Placed Successfully"); 
  }
  return (
    <div className='cart'>
      <div>
        <h1> Your Cart Items </h1>
      </div>
      <div className = "cartItems" >
        {
          PRODUCTS.map((product) => {
            if(cartItems[product.id ]!==0)
            return (<CartItem data={product}/> )

          })
        }
        
       </div>
       { totalAmount > 0 ? (
      <div className='checkout'>
        <p>SubTotal: Rs {totalAmount} </p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button >checkout</button>
      </div>
       ): (
        <h1>Your cart is Empty</h1>
       
       ) }
    </div>
   
  )
}
