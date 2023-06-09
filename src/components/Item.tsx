import { Product } from '@/utils/types'
import { Card, Row, Text, useTheme } from '@nextui-org/react'
import Link from 'next/link'
import { AddToCart } from './AddToCart'
interface Props {
    data: Product
}
export const Item = ({ data }: Props) => {
  const { theme } = useTheme()

  return (
    <Card css={{ w: '300px' }}>
      <Link href={'/product/' + data.id}>
        <Card.Header>
          <Text>{data.title}</Text>
        </Card.Header>
        <Card.Image css={{ h: '300px', bc: theme?.colors.gray300.value }} src={data.images.at(0) || ''} />
      </Link>

      <Card.Footer>
        <Row justify='space-around' align='center'>
          <AddToCart data={data} />
          <Text h5>${data.price}</Text>
        </Row>
      </Card.Footer>
    </Card>
  )
}
