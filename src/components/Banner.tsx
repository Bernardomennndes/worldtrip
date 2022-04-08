import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <>
            <Flex
                w="100%"
                h="370px"
                bgImage="url('/images/background.png')"
                bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
                bgRepeat="no-repeat"
                bgSize="cover"
            >
                <Flex
                    justify="space-between"
                    align="center"
                    w="100%"
                    mx="0"
                    px="36"
                >
                    <Box>
                        <Heading
                            color="gray.50"
                            fontSize="4xl"
                            fontWeight="500"
                        >
                            5 continents,<br />endless possibilities.
                        </Heading>
                        <Text
                            color="gray.300"
                            mt="5"
                            fontSize="xl"
                            maxW="550px"
                        >
                            It is time to make your travel you ever dreamt about.
                        </Text>
                    </Box>
                    <Image
                        w="480px"
                        display="block"
                        src="/images/airplane.svg"
                        alt="Flying airplane with some clouds around"
                        transform="translateY(48px)"
                        ml="8"
                    />
                </Flex>
            </Flex>
        </>
    );
}