import { AddToCart } from '@/components/AddToCart'
import { Layout } from '@/components/Layout'
import { comments, questions } from '@/utils/dummyData'
import { Product } from '@/utils/types'
import { Button, Card, Col, Grid, Image, Row, Text, useTheme } from '@nextui-org/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import StarRatings from 'react-star-ratings'

interface Props{
    product: Product
}

const ProductPage = ({ product }: Props) => {
  const { theme } = useTheme()

  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
        <meta name='description' content={product.description} />
        <link rel='icon' href='/appLogo.png' />
      </Head>
      <Grid.Container justify='space-evenly' css={{ mt: 50 }}>
        <Grid>
          <Image
            src={product.images.at(0) || ''}
            alt='Product photo'
            css={{ objectFit: 'cover', h: '70vh', w: '30vw', bc: 'blue', br: 10 }}
          />

          <Card css={{ bc: theme?.colors.accents0.value, w: '30vw', mt: 25, pl: 20, pr: 20, pb: 20 }}>
            <Card.Header>
              <Text h3>
                Questions
              </Text>
            </Card.Header>

            {questions.map((comment, i) => (
              <Card key={i} css={{ bc: theme?.colors.accents3.value, mt: 10 }}>
                <Card.Header>
                  <Col>
                    <Text>{comment.author}</Text>
                    <Text>
                      {comment.content}
                    </Text>
                  </Col>

                </Card.Header>

                <Card.Divider />
                <Card.Body>
                  {comment.answers.map((answer, i) => (
                    <Card key={i}>
                      <Card.Header>
                        <Text>{answer.author}</Text>
                      </Card.Header>
                      <Card.Divider />
                      <Card.Body>
                        <Text>{answer.content}</Text>
                      </Card.Body>
                    </Card>
                  ))}
                </Card.Body>
              </Card>
            ))}
          </Card>
        </Grid>

        <Grid>
          <Card css={{ bc: theme?.colors.accents0.value, w: '25vw', h: '50vh', p: 50, jc: 'space-between' }}>
            <Col>
              <Text h2>
                {product.title}
              </Text>

              <StarRatings
                rating={product.rating}
                starRatedColor={theme?.colors.primary.value}
                numberOfStars={5}
                name='rating'
                starDimension='20px'
                starSpacing='15px'
                starEmptyColor=''
              />

              <Text>
                {product.description}
              </Text>
            </Col>

            <Card.Footer>
              <Grid.Container justify='center' alignContent='center'>
                <AddToCart data={product} />
                <Button css={{ mt: 20 }}>Buy now</Button>
              </Grid.Container>
            </Card.Footer>
          </Card>

          <Card css={{ bc: theme?.colors.accents0.value, w: '25vw', mt: 25 }}>
            <Card.Header>
              <Text h3>Comments</Text>
            </Card.Header>

            <Card.Body>
              {comments.map((comment, i) => (
                <Card key={i} css={{ bc: theme?.colors.accents3.value, mt: 10 }}>
                  <Card.Header>
                    <Row justify='space-between'>
                      <Text>{comment.author}</Text>
                      <StarRatings
                        rating={comment.rating}
                        starRatedColor={theme?.colors.primary.value}
                        numberOfStars={5}
                        name='rating'
                        starDimension='15px'
                        starSpacing='5px'
                        starEmptyColor=''
                      />
                    </Row>
                  </Card.Header>

                  <Card.Body>

                    <Text>
                      {comment.content}
                    </Text>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>

        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.productId
  const response = await fetch('https://dummyjson.com/products/' + id)
  const product: Product = await response.json()

  return {
    props: {
      product
    }
  }
}

export default ProductPage
