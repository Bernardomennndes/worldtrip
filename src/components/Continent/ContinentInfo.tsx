import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface ContinentInfoProps {
    info: {
        numberOfCountries: number;
        numberOfIdioms: number;
        numberOfCities: number;
    }
}

export function ContinentInfo({ info }: ContinentInfoProps) {
    return (
        <Flex
            justify="space-evenly"
            align="center"
            maxW="490px"
            w="100%"
            justifySelf="center"
        >
            <Flex
                direction="column"
                justify="center"
                align="center"
            >
                <Heading fontSize={["2xl", "4xl"]} color="yellow.400" fontWeight="600">{info.numberOfCountries}</Heading>
                <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.700" >Countries</Text>
            </Flex>

            <Flex
                direction="column"
                justify="center"
                align="center"
            >
                <Heading fontSize={["2xl", "4xl"]} color="yellow.400" fontWeight="600">{info.numberOfIdioms}</Heading>
                <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.700" >Idioms</Text>
            </Flex>

            <Flex
                direction="column"
                justify="center"
                align="center"
            >
                <Heading fontSize={["2xl", "4xl"]} color="yellow.400" fontWeight="600">{info.numberOfCities}</Heading>
                <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.700" >
                    Cities +100

                    {/* <Popover>
                        <PopoverTrigger>
                            <span>
                                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]} />
                            </span>
                        </PopoverTrigger>
                        <PopoverContent bg="gray.700" color="yellow.400">
                            <PopoverArrow bg="gray.700" />
                            <PopoverCloseButton />
                            <PopoverBody fontWeight="400" fontSize="lg">{ }</PopoverBody>
                        </PopoverContent>
                    </Popover> */}
                </Text>
            </Flex>

        </Flex>
    );
}