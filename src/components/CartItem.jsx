import React, { useEffect, useState, useContext } from "react";
import "./cart.css";
import { AiFillDelete } from "react-icons/ai";
import AppContext from "../context";
function CartItem(prop) {
  let [totalPrice, setTotalPrice] = useState(Math.ceil(prop.item.price));
  let { dispactcherEvent } = useContext(AppContext);

  useEffect(() => {
    let price = prop.item.qty*prop.item.price;
    console.log(price)
    setTotalPrice(Math.ceil(price));
  }, [prop]);

  function handleQuantityChange(newQuantity) {
    prop.item.qty = newQuantity;
    console.log(prop.item);
    dispactcherEvent("UPDATE_ITEM", prop.item);
  }

  return (
    <div className="cartItem">
      <img src={prop.item.image} alt="Item" />
      <article>
        <h3>{prop.item.title}</h3>
        <p>₹ {totalPrice}</p>
      </article>

      <div>
        <button
          onClick={() =>
            handleQuantityChange(prop.item.qty <= 1 ? 0 : prop.item.qty - 1)
          }
        >
          -
        </button>
        <p>{prop.item.qty}</p>
        <button onClick={() => handleQuantityChange(prop.item.qty + 1)}>
          {" "}
          +{" "}
        </button>
      </div>
      <AiFillDelete
        onClick={() => {
          prop.delete(prop.id);
        }}
      />
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
