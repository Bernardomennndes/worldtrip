import { Link, Image } from '@chakra-ui/react';

export function Logo() {
    return (
        <Link
            href="/"
            display="block"
            mx="auto"
            my="3.5"
            justifySelf="center"
            gridColumn="2"
        >
            <Image
                w={["81px", "184px"]}
                src='/images/logo.svg'
                alt="A plane flying over the Worldtrip logo"
            />
        </Link>
    );
}