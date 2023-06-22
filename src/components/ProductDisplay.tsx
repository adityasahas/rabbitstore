import { Box, Grid, Heading, Stack, Text, useBreakpointValue, Image } from '@chakra-ui/react';

export default function ProductDisplay() {
    const layout = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" });

    return (
        <Stack spacing={10} align="center" justify="center" p={6}>
            <Heading as="h3" size="lg">
                What We Sell
            </Heading>
            <Grid
                templateColumns={layout}
                gap={6}
                alignItems="center"
            >
                <Box>
                    <Heading as="h4" fontSize="4xl" mb={2}>
                        Rabbit Meat
                    </Heading>
                    <Text fontSize="lg">
                        dfsdfipsdhfshdfhsdfhlsdfjhlsdjhfsdjkhfjh
                    </Text>
                </Box>
                <Box>
                    <Image
                        src="/rabbit.jpg"
                        alt="Rabbit Meat"
                        boxSize="300px"
                        borderRadius={10}
                    />
                </Box>
            </Grid>
        </Stack>
    );
}
