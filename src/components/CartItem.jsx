import React, { useEffect, useState } from "react";
import "./cart.css";
import { AiFillDelete } from "react-icons/ai";
function CartItem(prop) {
  let [quantity, setQuantity] = useState(1);
  let [totalPrice, setTotalPrice]=useState(prop.item.price);
  useEffect(()=>{
    if(quantity>0){
      setTotalPrice(prop.item.price)
    }
  },[prop])
  function handleQuantityChange(newQuantity){
    console.log(newQuantity);
    if(newQuantity>0){
        totalPrice = Number(prop.item.price)*newQuantity;
        setQuantity(newQuantity);
        setTotalPrice(totalPrice);
    }else{
        totalPrice=0;
        setTotalPrice(totalPrice);
        setQuantity(0);
    }
    // Step 5: Call parent's function with new quantity.
    prop.updatePrice(prop.item, newQuantity);
}

  return (
    <div className="cartItem">
      <img src={prop.item.image} alt="Item" />
      <article>
        <h3>{prop.item.title}</h3>
        <p>₹ {
        totalPrice
        }</p>
      </article>

      <div>
        <button onClick={() => handleQuantityChange(quantity<=1?0:quantity-1)
        }>-</button>
        <p>{quantity}</p>
        <button onClick={() => handleQuantityChange(quantity+1)}>+</button>
      </div>
      <AiFillDelete onClick={()=>{prop.delete(prop.id)}}/>
    </div>
  );
}

export default CartItem;
{
  // image,
  // title,
  // price,
  // qty,
  // updatePrice,
  // decrement,
  // increment,
  // deleteHandler,
  // id,
}