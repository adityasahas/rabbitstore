import { Box, Heading, Text } from "@chakra-ui/react";

const SuccessPage: React.FC = () => (
  <Box padding="6" boxShadow="lg" bg="white">
    <Heading as="h2" size="xl" mb="2">
      Payment Successful
    </Heading>
    <Text fontSize="lg">Thank you for your purchase!</Text>
  </Box>
);

export default SuccessPage;
