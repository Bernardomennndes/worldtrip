import Head from 'next/head';
import { } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Header />
      <Banner />

    </>
  )
}
