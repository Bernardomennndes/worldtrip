import { Flex, Text } from "@chakra-ui/react";

interface BannerProps {
    name: string;
    bannerImageURL: string;
}

export function Banner({ name, bannerImageURL }: BannerProps) {
    return (
        <Flex
            w="100%"
            h="500px"
            bgImage={`url(${bannerImageURL})`}
            bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
            bgRepeat="no-repeat"
            bgSize="cover"
        >
            <Text
                fontSize="4xl"
                fontWeight="600"
                color="gray.50"
                justifySelf="flex-end"
                alignSelf="end"
                maxW="1160px"
                w="100%"
                mx="auto"
                mb="60px"
            >
                {name}
            </Text>
        </Flex>

    );
}