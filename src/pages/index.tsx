import Head from 'next/head';
import { Typography } from '@mui/material';
import { Product } from '@/types/product';
import { MarketplaceBlockes } from '@/modules/MarketplaceBlockes';
import { apiBase, appTitle } from '@/utils/config';

type Props = {
  data: Product[];
  error?: string;
};

export default function Home({ data, error }: Props) {
  return (
    <>
      <Head>
        <title>{appTitle}</title>
        <meta
          name="description"
          content="This is a coding challenge for up 42"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {error && <Typography color="red">{error}</Typography>}

      {data && <MarketplaceBlockes data={data} />}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${apiBase}marketplace/blocks`);
  const { data, error } = await res.json();

  return {
    props: {
      data: data.filter(
        (item: Product) =>
          item?.metadata?.blockPricingStrategy?.name === 'simple'
      ),
      error,
    },
  };
}
