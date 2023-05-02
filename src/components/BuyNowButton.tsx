import { useCart } from '@/hooks/useCart'
import { Product } from '@/utils/types'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

interface Props {
    data: Product
}

export const BuyNowButton = ({ data }: Props) => {
  const { addToCart } = useCart(data)

  return (
    <Button as={Link} css={{ mt: 20 }} href='/checkout/' onPress={addToCart}>Buy now</Button>
  )
}
