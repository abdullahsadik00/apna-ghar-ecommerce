import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import AppContext from "../context";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products/" + id)
    //   .then((res) => res.json())
    //   .then((json) => {

    //     setProduct(json)});

    fetch("https://fakestoreapi.com/products/" + id)
      // calling json function.
      .then((res) => res.json())
      // listening for json function to return.
      .then((res) => {
        res.qty = 1;
        setProduct(res);
      });
  }, []);
  const { dispactcherEvent } = useContext(AppContext);
  const handleUpdate = () => {
    dispactcherEvent("ADD_ITEM", product);
    dispactcherEvent("CALCULATE_PRICE")

  };
  return (
    <>
      <Header />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 9, md: 12 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={product.image}
              fit={"contain"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "450px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {product.title}{" "}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ₹{product.price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Description
                </Text>
                <Text fontSize={"lg"}>{product.description}</Text>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={handleUpdate}
            >
              Add to cart
            </Button>

            <Text alignItems="center">2-3 business days delivery</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ProductDetails;
