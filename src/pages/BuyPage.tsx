import { VStack, Heading, Box, Flex } from "@chakra-ui/react";
import BuyButton from "../components/BuyButton";
import Navbar from "../components/navbar";

const BuyPage: React.FC = () => {
  // Replace with your actual Stripe price IDs
  const priceId1 = "price_1NLau7FfTf4uUx5IkMwUtIFR"; 
  const priceId2 = "price_1NLau7FfTf4uUx5IUILJxGDy";
  const priceId3 = "price_1NLau7FfTf4uUx5ICstcwEBP"; 

  return (
    <Flex flexDirection="column" minH="100vh">
      <Navbar />
      <VStack marginTop="60px" spacing={5} alignItems="center" py={10}>
        <Heading>Buy Our Products</Heading>

        <Box w="200px" borderWidth="1px" borderRadius="lg" p="6" textAlign="center">
          <Heading size="md">1 Pound ($10)</Heading>
          <BuyButton priceId={priceId1} />
        </Box>

        <Box w="200px" borderWidth="1px" borderRadius="lg" p="6" textAlign="center">
          <Heading size="md">2.5 Pounds ($25)</Heading>
          <BuyButton priceId={priceId2} />
        </Box>

        <Box w="200px" borderWidth="1px" borderRadius="lg" p="6" textAlign="center">
          <Heading size="md">3 Pounds ($30)</Heading>
          <BuyButton priceId={priceId3} />
        </Box>
      </VStack>
    </Flex>
  );
};

export default BuyPage;
