import { Container } from '@nextui-org/react'
import React from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

export const Layout = ({ children }) => {
  return (
    <Container fluid css={{ pl: 0, pr: 0 }}>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
