import { Alert, AlertDescription, AlertIcon, AlertTitle, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate();
  return (
<Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
  width="75%"
  margin={"auto"}
  marginTop="10%"
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Order has been confirmed
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for purchasing  form Apna Ghar. Our team will get back to you soon.
    <Button variant={"link"} ml={3} onClick={()=>{navigate("/")}}>Home</Button>
  </AlertDescription>
</Alert>  )
}

export default Success