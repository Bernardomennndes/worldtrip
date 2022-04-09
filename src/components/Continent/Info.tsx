import { Flex, Grid, Text } from "@chakra-ui/react";
import { ContinentInfo } from "./ContinentInfo";

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
        <Grid
            maxW="1160px"
            mx="auto"
            templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
            gap={[5, 10, 16, 20]}
            my={["8", "20"]}
            alignItems="center"
        >
            <Text
                fontSize={["lg", "xl", "xl", "2xl"]}
                color="gray.700"
                textAlign="justify"
                px="10px"
            >
                {description}
            </Text>
            <ContinentInfo info={info} />
        </Grid>
    );
}