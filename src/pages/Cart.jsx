import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import "../components/cart.css";
import Header from "../components/Header";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const products = localStorage.getItem("cartItems");
    if(products){
      const items = JSON.parse(products);
      updateFinalPrice(items);
      setCartItems(items);
    }
  }, []);
  // it will update the CartItem (component) price
  function updateCartItemPrice(item, newQuantity) {
    let items = cartItems;
    let cartItemIndex = items.findIndex((i) => i.title === item.title);
    items[cartItemIndex].qty = newQuantity;
    setCartItems(items);
    updateFinalPrice(items);
  }
  // it will update the final price of all the cart
  function updateFinalPrice(res) {
    let sum = 0;
    for (let i = 0; i < res.length; i++) {
      sum += Number(res[i].price) * Number(res[i].qty);
    }
    setTotalPrice(Math.ceil(sum));
  }
  function deleteItem(index) {
    let items = cartItems;
    items.splice(index, 1);
    setCartItems(items.slice());
    updateFinalPrice(items);
    // update items in localStorage.
    localStorage.setItem("cartItems", JSON.stringify(items));
  }
  return (
 <><Header/>   <div className="cart">
      
      <main>
        {cartItems.length !== 0 ? (
          cartItems.map((item) => (
            <CartItem
              // 4. Pass updatePrice function as props to update the Price.
              updatePrice={updateCartItemPrice}
              // 4. Pass deleteCart function as props to delete the cartItem.
              delete={deleteItem}
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
        <h2>Total: {totalPrice}</h2>
      </aside>
    </div>
    </>);
};
export default Cart;
