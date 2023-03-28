import React, { useContext, useState } from 'react'
import { Box, Button, Checkbox, Container, Divider, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, Text} from '@chakra-ui/react'
import {  ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { AiFillGithub,AiFillGoogleCircle,AiFillTwitterCircle } from 'react-icons/ai';
import AppContext from '../context';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    
    const providers = [
        { name: 'Google', icon: <AiFillGoogleCircle boxSize="5" /> },
        { name: 'Twitter', icon: <AiFillTwitterCircle boxSize="5" /> },
        { name: 'GitHub', icon: <AiFillGithub boxSize="5" /> },
      ]
      const [user,setUser] = useState({})
      const { cartItems } = useContext(AppContext);
const navigate = useNavigate()
  const handleSubmit = event => {
    event.preventDefault();
    // console.log("ok")
    if(cartItems.user.email == user.email){
       navigate("/")
    
    }else{
        console.log("not ok")
    }

  }; 
  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
    <Stack spacing="8">
      <Stack spacing="6">
        <Flex justifyContent={"center"}><Image w={24}  src="data:image/png;base64,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"/>
        </Flex>
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Don't have an account?</Text>
            <Button variant="link" colorScheme="blue">
              Sign up
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg-surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email"  onInput={(e) => {
              user.email = e.target.value;
              setUser(user);
            }}  />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input type="password"  onInput={(e) => {
              user.password = e.target.value;
              setUser(user);
            }} />
            </FormControl>
            <Button type='submit' variant="primary">Sign in</Button>
            </form>
            {/* <PasswordField /> */}
          </Stack>
          <Stack spacing="6">
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      <Button key={name} width="full">
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>  
  )
}

export default Signin