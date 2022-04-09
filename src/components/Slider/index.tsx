import { Flex } from '@chakra-ui/react';
import { SliderItem } from './SliderItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SliderProps {
    continents: {
        slug: string;
        title: string;
        summary: string;
        image: string;
    }[]
}

export function Slider({ continents }: SliderProps) {
    return (
        <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]} mt="10">
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                }}
                style={{ width: '100%', flex: '1' }}
            >

                {continents.map(continent => (
                    <SwiperSlide key={continent.slug}>
                        <SliderItem slug={continent.slug} title={continent.title} summary={continent.summary} image={continent.image} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </Flex>
    )
}