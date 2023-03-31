import { getBeers } from "@/lib/api";
import Layout from "@/modules/common/components/Layout";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { ReactElement } from "react";
import { Beer } from "@/types/beer";
import Pagination from "@/modules/beer/components/Pagination";
import BeerGridTemplate from "@/modules/beer/templates/BeerGridTemplate";
import Navbar from "@/modules/common/components/Navbar";
import BeerPageTemplate from "@/modules/beer/templates/BeerPageTemplate";
import Head from "@/modules/common/components/Head";

export const getServerSideProps: GetServerSideProps<{
  beer: Beer;
}> = async (context: GetServerSidePropsContext) => {
  const { params } = context;

  try {
    // its faster to error than to check if params is defined
    const { id } = params!;
    const [beer] = await getBeers({
      ids: id as string,
    });

    return {
      props: {
        beer,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const BeerPage = ({
  beer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head title={beer.name} />
      <BeerPageTemplate beer={beer} />
    </>
  );
};

BeerPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default BeerPage;
