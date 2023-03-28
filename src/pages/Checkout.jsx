import React, { useContext } from "react";
import Header from "../components/Header";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import CartOrderSummary from "../components/CartOrderSummary";
import AppContext from "../context";

const Checkout = () => {
  const { cartItems } = useContext(AppContext);
console.log(cartItems.user.name)
  return (
    <>
      <Header />
      <Box
        maxW={{ base: "3xl", lg: "7xl" }}
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "8", md: "16" }}
        >
          <Stack spacing={{ base: "8", md: "10" }} flex="2" p={3}>
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shipping Information{" "}
            </Heading>
            <Stack spacing="6">
              {/* payment address */}
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Full name</FormLabel>
                  <Input isReadOnly type={"text"} value={cartItems.user.name} placeholder="Please enter Full Name" />
                </FormControl>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input type="text" isReadOnly placeholder="Please enter Address"  value={cartItems.user.email}/>
                </FormControl>
                {/*  */}
                <Box display={"flex"}>
                  <Flex direction="column" align="center" flex="1" mr={3}>
                    <FormControl>
                      <FormLabel>Pincode</FormLabel>
                      <Input type="number" placeholder="Please enter Pincode" value={cartItems.user.code} isReadOnly/>
                    </FormControl>
                  </Flex>
                  <Flex direction="column" align="center" flex="3">
                    {" "}
                    <FormControl>
                      <FormLabel>City</FormLabel>
                      <Input type="text" placeholder="Please enter city" isReadOnly value={cartItems.user.city} />
                    </FormControl>
                  </Flex>
                </Box>
                {/*  */}

                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Email" isReadOnly value={cartItems.user.email} />
                </FormControl>
              </Stack>
              {/* payment address */}
            </Stack>
            <Heading textAlign="start" fontSize="2xl" fontWeight="extrabold">
              Payment Information
            </Heading>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Credit card number</FormLabel>
                <Input
                  type="number"
                  placeholder="Card number"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Name on card</FormLabel>
                <Input
                  type="text"
                  placeholder=" Card name"
                />
              </FormControl>
              <Box display={"flex"}>
                <Flex direction="column" align="center" flex="1" mr={3}>
                  <FormControl>
                    <FormLabel>Expiry date</FormLabel>
                    <Select placeholder="Select Expiry date">
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                    </Select>
                  </FormControl>
                </Flex>
                <Flex direction="column" align="center" flex="3">
                  {" "}
                  <FormControl>
                    <FormLabel>CVV</FormLabel>
                    <form >
                    <Input type="password" />
                    </form>
                  </FormControl>
                </Flex>
              </Box>
            </Stack>
          </Stack>
          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Checkout;
