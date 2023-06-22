import { Box, Button, Flex, useColorModeValue, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
export default function Navbar() {
    const blur = css({
        backdropFilter: 'blur(5px)',
    });

    return (
        <Box
            position="fixed"
            w="100%"
            css={blur}
        >
            <Flex
                maxW="1250px"
                m="0 auto"
                py={2}
                px={4}
                align="center"
                justify="space-between"
            >
                <Box>
                    <Text fontSize="3xl">Maxx&apos;s Rabbit Meat</Text>
                </Box>
                <Flex   align="center">
                    <Button as="a" href='/' mr={4}>Home</Button>
                    <Button colorScheme="green" as="a" href='/BuyPage' >Buy Now</Button>
                </Flex>
            </Flex>
        </Box>
    );
}
