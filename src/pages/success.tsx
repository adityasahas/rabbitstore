import { Box, Heading, Text } from "@chakra-ui/react";

const SuccessPage: React.FC = () => (
  <Box padding="6" boxShadow="lg" bg="white">
    <Heading as="h2" size="xl" mb="2">
      Payment Successful
    </Heading>
    <Text fontSize="lg">Thank you for your purchase!</Text>
    <Text fontSize="lg">To pickup your meat, contact Maxx Muldoon at (559) 530 - 5953 and present your receipt sent to your email to him.</Text>
  </Box>
);

export default SuccessPage;
