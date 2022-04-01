import { Link, Image } from '@chakra-ui/react';

export function Logo() {
    return (
        <Link
            href="/"
            display="block"
            mx="auto"
            my="3.5"
        >
            <Image src='./images/logo.svg' alt="Worldtrip" />
        </Link>
    );
}