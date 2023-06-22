import { Box, Grid, Heading, Stack, Text, useBreakpointValue, Image, Center, VStack } from '@chakra-ui/react';

export default function ProductDisplay() {
    const layout = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" });
    const boxSize = useBreakpointValue({ base: "250px", md: "500px" });
    const marginLeft = useBreakpointValue({ base: "0", md: "300" });

    return (
        <Center h="100vh">
            <VStack spacing={10} align="center" justify="center" p={6}>
                <Heading as="h3" size="lg">
                    What We Sell
                </Heading>
                <Grid
                    templateColumns={layout}
                    gap={6}
                    alignItems="center"
                    justifyItems="center"
                >   
                    <Box marginLeft={marginLeft} maxW="container.xl" py={12} >
                        <Heading as="h4" fontSize="4xl" mb={2}>
                            Rabbit Meat
                        </Heading>
                        <Text fontSize="lg">
                            At the heart of our rabbit breeding operation lies
                            a steadfast commitment to producing some of
                            the best tasting rabbit meat available. We
                            understand that flavor is a paramount
                            consideration for those seeking high-quality
                            meat, and we have dedicated ourselves to
                            achieving exceptional taste in every bite.
                        </Text>
                    </Box>
                    <Box>
                        <Image
                            src="/rabbit.jpg"
                            alt="Rabbit Meat"
                            boxSize={boxSize}
                            borderRadius={10}
                        />
                    </Box>
                </Grid>
            </VStack>
        </Center>
    );
}
