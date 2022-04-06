import Head from 'next/head';
import { Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { Divider } from '../components/Divider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Header />

      <Banner />

      <TravelTypes />

      <Divider />

      <Text
        fontSize="4xl"
        fontWeight="600"
        display="block"
        mx="auto"
        textAlign="center"
      >
        Get on the trip!<br />Choose your continent
      </Text>

    </>
  )
}
