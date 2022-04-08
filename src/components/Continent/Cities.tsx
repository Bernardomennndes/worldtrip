import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
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
            <Heading mb="40px" fontSize="3xl" color="gray.700">
                Cities +100
            </Heading>

            <SimpleGrid
                justifyItems="center"
                spacing="10"
                minChildWidth="260px"
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
            </SimpleGrid>
        </Box>

    );
}