import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import AppContext from "./context";
function App() {

  // 2. Initialize Store.
  const [cartItems, setCartItems] = useState([]);

  // 3. Dispatchers.
  // action means the type and payload means the data
  const dispactcherEvent = (action, payload) => {
    switch (action) {
      case "ADD_ITEM": {
        console.log("add to cart")
        let items = cartItems.slice();
        let isItemExist = items.find((el)=> el.id === payload.id);
        console.log(isItemExist)
        if(isItemExist ){
          items.forEach((el)=>{
            if(el.id === payload.id){
              console.log("isItemExist")
            }
          })
          setCartItems(items);
        }else{
          items[isItemExist] = payload;
          setCartItems(items)  
        }
        // console.log(items)
        break;
      }
      case "UPDATE_ITEM" :{
        console.log("update cart")

        let items = cartItems.slice();
        let index = items.findIndex((el)=>el.id === payload.id);
        items[index] = payload;
        setCartItems(items)
        break;
      }
      default: {
        console.log("invalid");
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
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Toaster />
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
