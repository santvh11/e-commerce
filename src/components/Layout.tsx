import { Container } from '@nextui-org/react'
import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Product } from '@/utils/types'

interface Props {
  children: React.ReactElement[]
  data: Product[]
}

export const Layout = ({ children, data }: Props) => {
  return (
    <Container fluid>
      <Navbar data={data} />
      {children}
      <Footer />
    </Container>
  )
}
