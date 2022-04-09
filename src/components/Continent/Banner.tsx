import { Flex, Text } from "@chakra-ui/react";

interface BannerProps {
    name: string;
    bannerImageURL: string;
}

export function Banner({ name, bannerImageURL }: BannerProps) {
    return (
        <Flex
            w="100%"
            h={["150px", "300px", "500px"]}
            px={["0", "0", "36"]}
            pt={["0", "0", "72"]}
            bgImage={`url(${bannerImageURL})`}
            bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
            bgRepeat="no-repeat"
            bgSize="cover"
            align="center"
            justify={["center", "center", "flex-start"]}
        >
            <Text
                fontSize={["1.75rem", "4xl"]}
                fontWeight="600"
                textAlign={["center", "left"]}
                color="gray.50"
            >
                {name}
            </Text>
        </Flex>

    );
}