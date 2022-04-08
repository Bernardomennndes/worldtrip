import Head from 'next/head';
import { GetStaticProps } from 'next/types';

import { Text } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { Divider } from '../components/Divider';
import { Slider } from '../components/Slider/index';

import { api } from '../services/api';

type SliderContinentDataProps = {
  slug: string;
  title: string;
  summary: string;
  image: string;
}

interface HomeProps {
  sliderContinents: SliderContinentDataProps[];
}

export default function Home({ sliderContinents }: HomeProps) {
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

      <Slider continents={sliderContinents} />

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const sliderContinents = await api.get('sliderContinents').then(response => response.data);

  return {
    props: {
      sliderContinents
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
