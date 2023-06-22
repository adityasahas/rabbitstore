import { VStack, Heading, Box, Flex } from "@chakra-ui/react";
import BuyButton from "../components/BuyButton";
import Navbar from "../components/navbar";

const BuyPage: React.FC = () => {
  // Stripe price IDs
  const priceId0 = "price_1NLebDFfTf4uUx5I3sp3Yehc"; 
  const priceId1 = "price_1NLZstFfTf4uUx5I4jHSlqw3"; 
  const priceId2 = "price_1NLbdmFfTf4uUx5IvFuSIoGs";
  const priceId3 = "price_1NLbe2FfTf4uUx5Io5hiM3pN"; 

  return (
    <Flex flexDirection="column" minH="100vh">
      <Navbar />
      <VStack marginTop="60px" spacing={5} alignItems="center" py={10}>
        <Heading>Buy Our Meat </Heading>

        <Box w="200px" borderWidth="1px" borderRadius="lg" p="6" textAlign="center">
          <Heading size="md">0.5 Pounds ($5)</Heading>
          <BuyButton priceId={priceId0} />
        </Box>
      </VStack>
    </Flex>
  );
};

export default BuyPage;
