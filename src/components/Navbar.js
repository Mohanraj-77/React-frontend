import React from 'react';
import { Link } from 'react-router-dom';
import{ShoppingCart} from "phosphor-react";
import "./Navbar.css";
 export const Navbar =() => {
    return (
        <>
      <div className='navbar'>
      <div className='links'> 
        <Link to="/"> shop </Link>
        <Link to="/cart"><ShoppingCart  size={25} /> </Link> </div>
       </div>
         
      </>
    )
};


