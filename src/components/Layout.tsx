import { Container } from '@nextui-org/react'
import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
  return (
    <Container fluid css={{ pl: 0, pr: 0 }}>
      <Navbar />
      {children}
      <Footer />
    </Container>
  )
}
