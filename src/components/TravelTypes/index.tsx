import { Grid, GridItem } from '@chakra-ui/react';
import { TypeItem } from './TypeItem';

export function TravelTypes() {
    return (
        <Grid
            w="100%"
            maxW="1160px"
            mx="auto"
            mt={["10", "32"]}
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap={[1, 5]}
        >
            <GridItem>
                <TypeItem icon="drink" text="Night Life" />
            </GridItem>

            <GridItem>
                <TypeItem icon="surf" text="Beach" />
            </GridItem>

            <GridItem>
                <TypeItem icon="building" text="Modern" />
            </GridItem>

            <GridItem>
                <TypeItem icon="museum" text="Classic" />
            </GridItem>

            <GridItem colSpan={[2, 2, 2, 1]} >
                <TypeItem icon="earth" text="And more..." />
            </GridItem>

        </Grid>
    );
}