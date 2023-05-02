import { AddToCart } from '@/components/AddToCart'
import { Layout } from '@/components/Layout'
import { RootState } from '@/redux/store'
import { Product } from '@/utils/types'
import { Button, Card, Col, Container, Grid, Image, Input, Row, Text, useTheme } from '@nextui-org/react'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'

interface Props{
    data: Product
}

const Checkout = () => {
  const { theme } = useTheme()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <Layout>
      <Head>
        <title>Checkout</title>
        <meta name='description' content='Chekout' />
        <link rel='icon' href='/appLogo.png' />
      </Head>

      <Grid.Container gap={2} wrap='wrap' justify='center'>
        <Grid xs={12} sm={8} lg={9}>
          <Card css={{ bc: theme?.colors.background.value }} variant='bordered'>
            <Card.Header>
              <Text h2>Checkout</Text>

            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Card css={{ bc: theme?.colors.background.value }}>
                <Card.Body>
                  <Input label='Full Name' initialValue='Jhon Connor' />
                  <Input label='Email' placeholder='...' initialValue='Jhon@example.com' css={{ mt: 20 }} />
                  <Input label='Address' placeholder='...' initialValue='St 39 # 45' css={{ mt: 20 }} />
                  <Input type='password' label='Card Number' placeholder='...' initialValue='1233213432345' css={{ mt: 20 }} />
                  <Input type='month' label='Expiration Date' placeholder='...' css={{ mt: 20 }} />
                  <Input type='month' label='Expiration Date' css={{ mt: 20 }} />
                  <Input type='password' label='CVV' placeholder='***' initialValue='332' css={{ mt: 20 }} />
                </Card.Body>
              </Card>
              <Card.Divider />
              <Card.Footer>
                <Row justify='center'>
                  <Button as={Link} href='/success'>Pay</Button>
                </Row>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={4} lg={3}>
          <Card>
            <Card.Header>
              <Text h2>Cart</Text>
            </Card.Header>

            <Card.Body>
              <Grid>
                {cartItems.map((item, i) => (
                  <Grid key={i}>
                    <Card variant='bordered'>
                      <Card.Body>
                        <Col>
                          <Text>{item.title}</Text>
                          <AddToCart data={item} />
                        </Col>
                      </Card.Body>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>

    </Layout>
  )
}

export default Checkout
