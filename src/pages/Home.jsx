import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      // calling json function.
      .then((res) => res.json())
      // listening for json function to return.
      .then((res) => {
        res.forEach((o) => {
          o.qty = 1;
          o.price = Math.ceil(o.price )
          o.rating.rate = Math.ceil(Number(o.rating.rate));
        });
        setProducts(res);
      });
  }, []);

  const handleCategory = (category)=>{
    fetch('https://fakestoreapi.com/products/category/'+category)
            .then(res=>res.json())
            .then(json=>        setProducts(json)
            )
  }
  return (
    <>
      {" "}
      <Header />
      <Hero/>
      <Box>
        <Text as={"b"} fontSize='5xl'>Category</Text>
      <HStack justifyContent={"center"} m={4}  flexWrap={"wrap"}>
        
        <Button m={3} colorScheme='green' onClick={()=>handleCategory("women's clothing")}>Women's clothing</Button>
        <Button m={3} colorScheme='green' onClick={()=>handleCategory("men's clothing")}>Men's clothing</Button>
        <Button m={3} colorScheme='green' onClick={()=>handleCategory("jewelery")}>Jewelery</Button>
        <Button m={3} colorScheme='green' onClick={()=>handleCategory("electronics")}>Electronics</Button>
        
      </HStack>
      </Box>
{
  products.length ?<HStack flexWrap={"wrap"} width={"full"} justifyContent={"space-evenly"}>
  {products.map((product, i) => (
    <ProductCard
      key={product.id}
      item={product}
      index={i}
    />
  ))}
</HStack>:<Alert status='error'   width='75%' margin={"auto"}

>
  <AlertIcon />
  <AlertTitle>Sorry for inconvenience</AlertTitle>
  <AlertDescription>The issue has been occurred from our side.Please try again after sometime</AlertDescription>
</Alert>
}
    </>
  );
};

export default Home;
