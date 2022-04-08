import { Flex, Text } from "@chakra-ui/react";

interface InfoProps {
    description: string;
    info: {
        numberOfCountries: number;
        numberOfIdioms: number;
        numberOfCities: number;
    }
}

export function Info({ description, info }: InfoProps) {
    return (
        <Flex
            maxW="1160px"
            justify="space-between"
            align="center"
            mx="auto"
            my="80px"
        >
            <Text
                fontSize="2xl"
                fontWeight="400"
                color="gray.700"
                maxW="600px"
                textAlign="justify"
            >
                {description}
            </Text>
            <Flex
                justify="space-between"
                align="center"
                maxW="490px"
                w="100%"
            >
                <Flex
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <Text fontSize="5xl" fontWeight="600" color="yellow.400" >{info.numberOfCountries}</Text>
                    <Text fontSize="2xl" fontWeight="600" >Countries</Text>
                </Flex>

                <Flex
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <Text fontSize="5xl" fontWeight="600" color="yellow.400" >{info.numberOfIdioms}</Text>
                    <Text fontSize="2xl" fontWeight="600" >Idioms</Text>
                </Flex>

                <Flex
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <Text fontSize="5xl" fontWeight="600" color="yellow.400" >{info.numberOfCities}</Text>
                    <Text fontSize="2xl" fontWeight="600" >Cities +100</Text>
                </Flex>

            </Flex>
        </Flex>
    );
}