import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header/Header'
import { Carousel } from '@/components/carousel/Carousel'
import { Data } from '@/utils/types'

export default function Home({ products }: Data) {
  return (
    <>
      <Head>
        <title>La Tiendita</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Carousel carouselSize={5} data={products} />
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