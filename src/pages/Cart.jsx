import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import "../components/cart.css";
import Header from "../components/Header";
import AppContext from "../context";
import { useContext } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartOrderSummary from "../components/CartOrderSummary";
import ProductDetails from "./ProductDetails";
import Checkout from "./Checkout";
import Register from "./Register";
import Signin from "./Signin";
const Cart = () => {
  const { cartItems } = useContext(AppContext);
  console.log(cartItems.cartItem);
  return (
    <>
      <Header />{" "}
      <Box
        maxW={{ base: "3xl", lg: "7xl" }}
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "flex-start" }}
          spacing={{ base: "8", md: "16" }}
        >
          <Stack spacing={{ base: "8", md: "10" }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({cartItems.cartItem.length} items)
            </Heading>

            <Stack spacing="6">
              {Object.values(cartItems.cartItem).map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link to={"/"}>Continue shopping</Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};
export default Cart;
