import { Link, Box, Heading, Text } from "@chakra-ui/react";

const CancelPage: React.FC = () => (
  <Box padding="6" boxShadow="lg" bg="white">
    <Heading as="h2" size="xl" mb="2">
      Payment Failed
    </Heading>
    <Text fontSize="lg">Your payment was not successful. Please try again. <Link href="/"><u>Return to home</u></Link></Text>
  </Box>
);

export default CancelPage;
