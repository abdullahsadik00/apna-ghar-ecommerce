import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";

const ProductCard = (values) => {
  const handleAddToCart=()=>{
      // cartItems is the key.
      const products = localStorage.getItem("cartItems");
      // if there are no cartitems
      if(!products){
        let cartItems=[];
        cartItems.push(values.item);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }else{
        // there are some existing data.
        let cartItems = JSON.parse(products);
        cartItems.push(values.item);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
      values.notify();
  }
  return (
    <VStack
      w="350px"
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
      m="10px"
    >
      <Heading size={"md"} noOfLines={2}>
        {values.item.title}
      </Heading>

      <Image
        src={values.item.image}
        w="300px"
        h="270px"
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Box display="flex" mt="2" alignItems="center" justifyContent={"center"}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={i}
              color={
                i <
                4
                  ? "teal.500"
                  : "gray.300"
              }
            />
          ))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {`${values.item.rating.count} `}
          reviews
        </Box>
      </Box>
      <Text noOfLines={1}>{values.item.category}</Text>
      <Text as={"b"} fontSize={"2xl"}>{`₹${values.item.price}`}</Text>
      <Text noOfLines={2}>{values.item.description}</Text>
      <Divider />
      <HStack>
        <Button
          variant={"solid"}
          colorScheme={"yellow"}
          onClick={handleAddToCart}
          id={values.item.id}
        >
          Add To Cart
        </Button>
      </HStack>
    </VStack>
  );
};

export default ProductCard;
