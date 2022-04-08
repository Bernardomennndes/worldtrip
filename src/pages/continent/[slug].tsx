import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { Banner } from "../../components/Continent/Banner";
import { Cities } from "../../components/Continent/Cities";
import { Info } from "../../components/Continent/Info";
import { Header } from "../../components/Header";

import { api } from "../../services/api";

type Countries = {
    id: number;
    name: string;
    flag: string;
    capital: string;
    image: string;
}

interface ContinentPageProps {
    continentInfo: {
        id: string;
        name: string;
        bannerImageURL: string;
        description: string;
        info: {
            numberOfCountries: number;
            numberOfIdioms: number;
            numberOfCities: number;
        }
        countries: Countries[];
    }
}

export default function ContinentPage({ continentInfo }: ContinentPageProps) {
    return (
        <>
            <Head>
                <title>{continentInfo.name} | WorldTrip</title>
            </Head>

            <Header />

            <Banner name={continentInfo.name} bannerImageURL={continentInfo.bannerImageURL} />

            <Info description={continentInfo.description} info={continentInfo.info} />

            <Cities countries={continentInfo.countries} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const continentInfo = await api.get(`/continents/${params.slug}`).then(response => response.data)

    return {
        props: {
            continentInfo
        },
        revalidate: 60 * 60 * 24 * 10 // 10 days
    }
}