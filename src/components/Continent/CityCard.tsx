import { Flex, Box, Text, Image, Avatar, Stack } from "@chakra-ui/react";

interface CityCardProps {
    name: string;
    flag: string;
    capital: string;
    image: string;
}

export function CityCard({ name, flag, capital, image }: CityCardProps) {
    return (
        <Box
            w="fit-content"
            bg="white"
        >
            <Image
                src={image}
                w="258px"
                h="173px"
                alt="Country Image"
                objectFit="cover"
                objectPosition="center"
                borderTopRadius="4"
            />

            <Flex
                align="center"
                justify="space-between"
                pt="5"
                pb="6"
                px="6"
                borderWidth="1px"
                borderBottomRadius="4px"
                borderColor="rgba(255,186,8,0.5)"
                borderTop="0"
            >
                <Stack spacing="3">
                    <Text
                        fontSize="xl"
                        fontWeight="600"
                        color="gray.700"
                    >
                        {name}
                    </Text>

                    <Text
                        fontSize="md"
                        fontWeight="400"
                        color="gray.500"
                    >
                        {capital}
                    </Text>
                </Stack>
                <Avatar
                    src={flag}
                    w="30px"
                    h="30px"
                />
            </Flex>
        </Box>
    );
}