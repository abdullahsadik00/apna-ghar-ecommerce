import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import { createContext } from "react";
import { useState } from "react";
function App() {
  // 1. Create Context for application.
  const AppContext = createContext();

  // 2. Initialize Store.
  const [cartItems, setCartItems] = useState([]);

  // 3. Dispatchers.
  // action means the type and payload means the data
  const dispactcherEvent = (action, payload) => {
    switch (action) {
      case "ADD_ITEM": {
        setCartItems(...cartItems, payload);
        break;
      }
      default: {
        console.log("invalid");
      }
    }
  };

  return (
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
