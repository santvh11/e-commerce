import Head from 'next/head'
import { Banners } from '@/components/Banners'
import { Data } from '@/utils/types'
import { Carousel } from '@/components/Carousel'
import { Layout } from '@/components/Layout'

export default function Home ({ products }: Data) {
  return (
    <Layout data={products}>
      <Head>
        <title>La Tiendita</title>
        <meta name='description' content='Is like Amazon but better' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/appLogo.png' />
      </Head>
      <Banners title='Offers' carouselSize={5} data={products} />
      <Carousel data={products} carouselSize={8} title='You may be interested in...' />
    </Layout>
  )
}

export async function getServerSideProps () {
  const response = await fetch('https://dummyjson.com/products')
  const { products }: Data = await response.json()

  return {
    props: {
      products
    }
  }
}
