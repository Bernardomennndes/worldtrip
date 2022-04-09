import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { LinkBox, Flex, Heading, Text } from "@chakra-ui/react";

interface SliderItemProps {
    slug: string;
    title: string;
    summary: string;
    image: string;
}

export function SliderItem({ slug, title, summary, image }: SliderItemProps) {
    return (
        <Link href={`/continent/${slug}`} passHref>
            <LinkBox as="a">
                <Flex
                    w="100%"
                    h="100%"
                    textAlign="center"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage={`url(${image})`}
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundPosition="100% 30%"
                >
                    <Heading fontSize={["3xl", "4xl", "5xl"]} fontWeight="bold" color="gray.50">
                        {title}
                    </Heading>
                    <Text fontSize={["0.8rem", "1xl", "2xl"]} fontWeight="bold" color="gray.100" mt={["2", "4"]}>
                        {summary}
                    </Text>
                </Flex>
            </LinkBox>
        </Link>
    );
}