import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import AppContext from "./context";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
function App() {
  // 2. Initialize Store.
  const [cartItems, setCartItems] = useState({
    cartItem: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
    user:{},
    payment:{}
  });

  // 3. Dispatchers.
  // action means the type and payload means the data
  const dispactcherEvent = (action, payload) => {
    switch (action) {
      case "ADD_ITEM": {
        let item = payload;
        let cart = cartItems.cartItem;
        const isItemExist = cartItems.cartItem.find((i) => i.id == item.id);
        if (isItemExist) {
          cart.forEach((i) => {
            if (i.id == item.id) {
              i.qty += 1;
            }
          });
          setCartItems({ ...cartItems, cartItems: "cart" });
        } else {
          cart.push(item);
          setCartItems({ ...cartItems, cartItems: "cart" });
        }
        break;
      }
      case "DECREMENT_ITEM": {
        let cart = cartItems.cartItem;
        let index = cartItems.cartItem.findIndex((i) => i.id == payload.id);
        if(cart[index].qty >1)
        cart[index].qty -= 1;
        setCartItems({ ...cartItems, cartItems: "cart" });
        break;
      }
      case "DELETE_ITEM": {
        let cart = cartItems.cartItem;
        let index = cartItems.cartItem.findIndex((i) => i.id == payload.id);
        cart.splice(index,1)
          setCartItems({ ...cartItems, cartItems: "cart" });
          break;
      }
      case "CALCULATE_PRICE":{
        let sum = 0;
        cartItems.cartItem.forEach((i)=>(sum += i.price * i.qty))
        cartItems.subTotal = sum;
        cartItems.subTotal = cartItems.subTotal;
        cartItems.shipping = cartItems.subTotal > 500 ? 0 : 200;
        cartItems.tax =+ (cartItems.subTotal * .18).toFixed();
        cartItems.total = cartItems.subTotal + cartItems.tax + cartItems.shipping
        setCartItems({...cartItems,cartItems:"cartItems.total"})
        setCartItems({...cartItems,cartItems:"cartItems.tax"})
        setCartItems({...cartItems,cartItems:"cartItems.shipping"})
        setCartItems({...cartItems,cartItems:"cartItems.subTotal"})
        break;
      }
      case "USER":{
        cartItems.user = payload
        break;
      }
      case "PAYMENT":{
        cartItems.payment = payload
        break;
      }
      default: {
      }
    }
  };

  return (
    // 4. Initializing Context.
    <AppContext.Provider value={{ cartItems, dispactcherEvent }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
          <Toaster />
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
