import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import "../components/cart.css";
import Header from "../components/Header";
import AppContext from "../context";
import { useContext } from "react";
const Cart = () => {
  const {cartItems} = useContext(AppContext);
  console.log(cartItems);
  let totalPrice = 0;
  totalPrice = cartItems.reduce((prev,curr)=>prev + (curr.price * curr.qty) , 0);
  totalPrice = Math.ceil(totalPrice)
  return (
 <><Header/>   <div className="cart">
      
      <main>
        {cartItems.length !== 0 ? (
          cartItems.map((item) => (
            <CartItem
              item={item}
              id={item.id}
              key={item.id}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      {/* 2. Print updated total price */}
      <aside>
        <h2>Subtotal: </h2>
        <h2>Shipping: </h2>
        <h2>Tax: </h2>
        <h2>Total: 
          {totalPrice}
          </h2>
      </aside>
    </div>
    </>);
};
export default Cart;
