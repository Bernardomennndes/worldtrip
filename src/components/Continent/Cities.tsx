import { Box, Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

type Countries = {
    id: number;
    name: string;
    flag: string;
    capital: string;
    image: string;
}

interface CitiesProps {
    countries: Countries[];
}

export function Cities({ countries }: CitiesProps) {
    return (
        <Box
            maxW="1160px"
            my="80px"
            mx="auto"
        >
            <Heading mb="40px" fontSize={["2xl", "3xl"]} color="gray.700">
                Cities +100
            </Heading>

            <Grid
                templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={['20px', '45px']}
                alignItems="center"
                justifyContent="center"
                px={["30px", "0"]}
            >

                {countries.map(card => (
                    <CityCard
                        key={card.id}
                        name={card.name}
                        flag={card.flag}
                        capital={card.capital}
                        image={card.image}
                    />
                ))}

            </Grid>
        </Box>

    );
}