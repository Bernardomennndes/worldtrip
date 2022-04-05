import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo';

export function Header() {
    return (
        <Flex bg="white" w="100%" as="header" mx="auto" px="1rem" align="center" justify="center">
            <Logo />
        </Flex>
    );
}