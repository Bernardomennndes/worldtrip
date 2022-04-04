import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo';

export function Header() {
    return (
        <Flex as="header">
            <Logo />
        </Flex>
    );
}