import {
  Button,
  HStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import "./cart.css";
import AppContext from "../context";
import {
  Box,
  CloseButton,
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

function CartItem(prop) {
  const { dispactcherEvent } = useContext(AppContext);
  const handleIncrement = () => {
    // console.log(prop);
    dispactcherEvent("ADD_ITEM", prop);
    dispactcherEvent("CALCULATE_PRICE")

  };
  const handleDecrement = () => {
    // console.log("decrement")
    // console.log(prop);
    dispactcherEvent("DECREMENT_ITEM", prop);
    dispactcherEvent("CALCULATE_PRICE")
  };
  const handleDelete = () => {
    dispactcherEvent("DELETE_ITEM", prop);
    dispactcherEvent("CALCULATE_PRICE")

  };
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="contain"
          src={prop.image}
          alt="name"
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{prop.title}</Text>
          </Stack>
        </Box>
      </Stack>
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "flex" }}
      >
        <HStack>
          <Button onClick={handleDecrement}>-</Button>
          <Text>{prop.qty}</Text>
          <Button onClick={handleIncrement}>+</Button>
        </HStack>
        <Text mt={{ base: 4, md: 0 }}> {Math.round(prop.price)}</Text>
        <CloseButton
          mt={{ base: 4, md: 0 }}
          aria-label={`Delete 
        {name}
         from cart`}
          onClick={handleDelete}
        />
      </Flex>
    </Flex>
  );
}
export default CartItem;
