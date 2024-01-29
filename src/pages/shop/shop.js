import React from 'react'
import {PRODUCTS}   from "../../products";
import {Product} from './product'
import "./shop.css"
export const Shop = () => {
  return (
    <>
    <div className='shop'></div>
    <div className='shoptitle'>
        <h1>Natural farms shop</h1>
        </div>
    <div className='products'> {PRODUCTS.map((product) => (
       <Product data={product}/>
    ))}

    </div>
    
    </>
  )
}
