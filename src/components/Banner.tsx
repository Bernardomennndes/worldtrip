import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <>
            <Box>
                <Image w="100%" h="370px" src="/images/background.png" alt="background" zIndex="-1" />
                <Flex
                    w="100%"
                    h="370px"
                    justifyContent="space-around"
                    alignItems="center"
                    position="absolute"
                    top="0"
                    left="0"
                    mt="20"
                >
                    <Box>
                        <Text
                            as="h1"
                            color="gray.50"
                            fontSize="36px"
                            fontWeight="500"
                            fontFamily="Poppins"
                        >
                            5 continents,<br />endless possibilities
                        </Text>
                        <Text
                            as="p"
                            color="gray.100"
                            fontSize="20px"
                            fontFamily="Poppins"
                        >
                            It is time to make your travel you ever dreamt about.
                        </Text>
                    </Box>
                    <Image src="/images/airplane.svg" alt="Airplane" zIndex="auto" mt="10" />
                </Flex>
            </Box>
        </>
    );
}