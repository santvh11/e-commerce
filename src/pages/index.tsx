import Head from 'next/head'
import { Header } from '@/components/header/Header'
import { Banners } from '@/components/carousel/Carousel'
import { Data } from '@/utils/types'

export default function Home({ products }: Data) {
  return (
    <>
      <Head>
        <title>La Tiendita</title>
        <meta name="description" content="Is like Amazon but better" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/appLogo.png" />
      </Head>
      <Header />
      <Banners title='Offers' carouselSize={5} data={products} />
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://dummyjson.com/products')
  const { products }: Data = await response.json()

  return {
    props: {
      products
    }
  }
}