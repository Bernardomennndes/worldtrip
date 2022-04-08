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
                    direction="column"
                    align="center"
                    justify="center"
                    h={{ base: 250, xl: 450 }}
                    w="100%"
                    bg={`url(${image})`}
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    boxShadow="inset 0 0 0 450px rgba(28, 20, 1, 0.35)"
                >
                    <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} color="gray.50">
                        {title}
                    </Heading>
                    <Text fontSize={{ base: 'sm', md: 'xl', lg: '2xl' }} fontWeight="bold" color="gray.100" mt={{ base: '3', xl: '4' }}>
                        {summary}
                    </Text>
                </Flex>
            </LinkBox>
        </Link>
    );
}