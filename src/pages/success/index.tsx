import { AddToCart } from '@/components/AddToCart'
import { Layout } from '@/components/Layout'
import { RootState } from '@/redux/store'
import { Data, Product } from '@/utils/types'
import { Button, Card, Col, Container, Grid, Image, Input, Row, Text, useTheme } from '@nextui-org/react'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Success ({ products }: Data) {
  const { theme } = useTheme()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <Layout data={products}>
      <Head>
        <title>Congratulations!</title>
        <meta name='description' content='Chekout' />
        <link rel='icon' href='/appLogo.png' />
      </Head>

      <Grid.Container gap={2} wrap='wrap' justify='center'>
        <Grid xs={12} sm={8} lg={9}>
          <Card css={{ bc: theme?.colors.background.value }} variant='bordered'>
            <Card.Header>
              <Text h2>Summary</Text>

            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Card css={{ bc: theme?.colors.background.value }}>
                <Card.Body>
                  <Input label='Full Name' value='Jhon Connor' readOnly bordered />
                  <Input label='Email' placeholder='...' value='Jhon@example.com' css={{ mt: 20 }} readOnly bordered />
                  <Input label='Address' placeholder='...' value='St 39 # 45' css={{ mt: 20 }} readOnly bordered />
                  <Text css={{ mt: 20 }} h4>Your order will arrive in about: 5 days</Text>
                </Card.Body>

                <Card.Footer>
                  <Col>
                    <Text>Any questions?</Text>
                    <Button as={Link} href='/help' css={{ mt: 20 }}>Help!</Button>
                  </Col>
                </Card.Footer>
              </Card>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={4} lg={3}>
          <Card>
            <Card.Header>
              <Text h2>Your new items!</Text>
            </Card.Header>

            <Card.Body>
              <Grid>
                {cartItems.map((item, i) => (
                  <Grid key={i}>
                    <Card variant='bordered'>
                      <Card.Body>
                        <Row justify='space-between'>
                          <Text>{item.title}</Text>
                        </Row>
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

export async function getServerSideProps () {
  const response = await fetch('https://dummyjson.com/products')
  const { products }: Data = await response.json()

  return {
    props: {
      products
    }
  }
}
