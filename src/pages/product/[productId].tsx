import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { Layout } from '@/components/layout/Layout'
import { Product } from '@/utils/types'
import { Button, Card, Col, Container, Grid, Image, Row, Spacer, Text, useTheme } from '@nextui-org/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import StarRatings from 'react-star-ratings'

interface Props{
    product: Product
}

const comments = [
  {
    author: 'John',
    rating: 4,
    content: 'Is a very good product'
  },
  {
    author: 'Anna',
    rating: 5,
    content: 'Is the best product'
  }
]

const questions = [
  {
    author: 'John',
    content: 'Do you deliver to Colombia?',
    answers: [
      {
        author: 'James',
        content: 'Yes, we do'
      }
    ]
  }
]

const ProductPage = ({ product }: Props) => {
  const { theme } = useTheme()

  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
        <meta name='description' content={product.description} />
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

              <Text h3>
                ${product.price}
              </Text>
            </Col>

            <Row justify='space-around'>
              <Button flat auto>
                Add to Whislist
              </Button>

              <Button auto>
                Add to Cart
              </Button>
            </Row>
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
