import React from 'react'
import {GrCart} from "react-icons/gr"
import { useSelector } from "react-redux";
export const Navbar = () => {
    const { amount } = useSelector((store) => store.cart);
    return (
      <header>
        <h1>My Store</h1>
        <div className="amount-container">
          <GrCart className="cart-icon" />
          <span className="badge">{amount}</span>
        </div>
      </header>
    );
}
