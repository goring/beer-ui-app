import Layout from "@/modules/common/components/Layout";
import Head from "@/modules/common/components/Head";
import { ReactElement } from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getBeers } from "@/lib/api";
import { Beer } from "@/types/beer";
import BeerGridTemplate from "@/modules/beer/templates/BeerGridTemplate";
import Pagination from "@/modules/beer/components/Pagination";
import { PAGE_COUNT } from "@/lib/constants";

export const getServerSideProps: GetServerSideProps<{
  beers: Beer[];
}> = async (context: GetServerSidePropsContext) => {
  const { query } = context;
  const beers = await getBeers({
    page: Math.min(query.page ? Number(query.page) : 1, PAGE_COUNT),
  });

  return {
    props: {
      beers,
    },
  };
};

export default function Home({
  beers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head title="Home" />
      <BeerGridTemplate beers={beers} />
      <Pagination />
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
