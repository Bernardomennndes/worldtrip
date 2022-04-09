import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <>
            <Flex
                w="100%"
                h={["163px", "250px", "250px", "370px"]}
                bgImage="url('/images/background.png')"
                bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
                bgRepeat="no-repeat"
                bgSize="cover"
            >
                <Flex
                    w="100%"
                    mx="0"
                    px={["4", "10", "15", "20", "36"]}
                    justify={['center', 'space-between']}
                    align="center"
                >
                    <Box>
                        <Heading
                            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
                            fontWeight="500"
                            color="gray.50"
                        >
                            5 continents,<br />endless possibilities.
                        </Heading>
                        <Text
                            maxW={["100%", "100%", "100%", "550px"]}
                            mt="5"
                            fontSize={["0.8rem", "xl"]}
                            color="gray.300"
                        >
                            It is time to make your travel you ever dreamt about.
                        </Text>
                    </Box>
                    <Image
                        src="/images/airplane.svg"
                        alt="Flying airplane with some clouds around"
                        w={["300px", "300px", "300px", "480px"]}
                        ml="8"
                        display={['none', 'none', 'block']}
                        transform="translateY(48px)"
                    />
                </Flex>
            </Flex>
        </>
    );
}