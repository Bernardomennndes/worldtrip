import Link from 'next/link';
import { Logo } from './Logo';
import { Flex, Grid, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {

    const { asPath } = useRouter();
    const isHomePage = asPath === '/';

    return (
        <Flex bg="white" w="100%" as="header" mx="auto" px="1rem" align="center" justify="center" h={["50px", "100px"]}>
            <Grid
                w="100%"
                h="100%"
                mx="auto"
                maxW="1160px"
                alignItems="center"
                justifyContent="center"
                templateColumns="repeat(3, 1fr)"
                alignSelf="start"
            >
                {!isHomePage && (
                    <Link href="/" passHref >
                        <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
                    </Link>
                )}
                <Logo />
            </Grid>
        </Flex>
    );
}