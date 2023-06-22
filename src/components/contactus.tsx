import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

export default function ContactUs() {
  return (
    
    <form action="https://getform.io/f/c6d74b67-5113-4874-abd4-8162bf345399" method="POST">
      <VStack spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel>Your Name</FormLabel>
          <Input type="text" name="name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Input as="textarea" name="message" />
        </FormControl>
        <Button colorScheme="green" type="submit">
          Submit
        </Button>
      </VStack>
    </form>
  );
}
