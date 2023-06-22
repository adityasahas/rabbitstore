import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Input,
  FormControl,
  FormLabel,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import Navbar from "../components/navbar";
import ProductDisplay from "../components/ProductDisplay";
import ContactUs from "../components/contactus";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Flex
        backgroundImage="farm.jpg"
        backgroundSize="cover"
        height="100vh"
        align="center"
        justify="center"
      >
        <VStack spacing={8} align="center">
          <Heading size="2xl" color={useColorModeValue("white", "gray.800")}>
            Maxx&apos;s Meats
          </Heading>
          <Text fontSize="xl" color={useColorModeValue("white", "gray.300")}>
            Support your local Youth Ag Business
          </Text>
          <Button colorScheme="green" as="a" href='/BuyPage' >Buy Now </Button>
        </VStack>
      </Flex>
      <ProductDisplay />
      <Container maxW="container.xl" py={12}>
        <Heading as="h2" size="xl" mb={5}>
          About Us
        </Heading>
        <Text fontSize="lg" mb={10}>
        Maxx Muldoon, a passionate and dedicated
young rabbit breeder, has achieved remarkable
success in his endeavor. Through meticulous
breeding techniques, unwavering commitment,
and a deep love for his rabbits, he has produced
a remarkable line of prize-winning meat rabbits.
Recognizing the value of his accomplishments,
Maxx is eager to share his achievements and the
incredible quality of his rabbits with others.        </Text>
        <Divider mb={10}/>
        <Center>
        <Heading  mb={10} as="h3" size="lg">
                Contact Us
            </Heading>
        </Center>
        <ContactUs  />
      </Container>
    </Box>
  );
}
