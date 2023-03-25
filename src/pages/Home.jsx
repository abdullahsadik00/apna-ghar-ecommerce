import { HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import Header from "../components/Header";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartItemCount, setCartItemCount]=useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      // calling json function.
      .then((res) => res.json())
      // listening for json function to return.
      .then((res) => {
        res.forEach(o=>{
          o.qty=1;
          o.rating.rate=Math.ceil(Number(o.rating.rate));
        })
        setProducts(res);
      });
  }, []);
  
  return (
  <>   <Header/>
    <HStack flexWrap={"wrap"} width={"full"} justifyContent={"space-evenly"}>
      {products.map((product, i) => (
        <ProductCard key={product.id} item={product} index={i}           
        // handler = {addToCart}
         />
      ))}
    </HStack>
  </>
  );
};

export default Home;
