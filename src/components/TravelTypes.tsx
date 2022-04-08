import { Flex, Image, Text } from '@chakra-ui/react';

export function TravelTypes() {
    return (
        <Flex
            w="100%"
            maxW="1160px"
            justify="space-between"
            align="center"
            mt="114px"
            mx="auto"
        >

            <Flex
                direction="column"
                align="center"
            >
                <Image src="/icons/drink.svg" alt="Drink" />
                <Text
                    fontWeight="600"
                    mt="24px"
                    fontSize="xl"
                >
                    Night Life
                </Text>
            </Flex>

            <Flex
                direction="column"
                align="center"
            >
                <Image src="/icons/surf.svg" alt="Surf board" />
                <Text
                    fontWeight="600"
                    mt="24px"
                    fontSize="xl"
                >
                    Beach
                </Text>
            </Flex>

            <Flex
                direction="column"
                align="center"
            >
                <Image src="/icons/building.svg" alt="Building" />
                <Text
                    fontWeight="600"
                    mt="24px"
                    fontSize="xl"
                >
                    Modern
                </Text>
            </Flex>

            <Flex
                direction="column"
                align="center"
            >
                <Image src="/icons/museum.svg" alt="Museum" />
                <Text
                    fontWeight="600"
                    mt="24px"
                    fontSize="xl"
                >
                    Classic
                </Text>
            </Flex>

            <Flex
                direction="column"
                align="center"
            >
                <Image src="/icons/earth.svg" alt="Earth" />
                <Text
                    fontWeight="600"
                    mt="24px"
                    fontSize="xl"
                >
                    and more...
                </Text>
            </Flex>

        </Flex>
    );
}