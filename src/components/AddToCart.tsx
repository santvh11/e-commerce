import { useCart } from '@/hooks/useCart'
import { Product } from '@/utils/types'
import { Button } from '@nextui-org/react'
import { QuantitySelector } from './QuantitySelector'

interface Props {
    data: Product
}

export const AddToCart = ({ data }: Props) => {
  const { addToCart, changeQuantity, quantity } = useCart(data)

  if (quantity) {
    return <QuantitySelector handleOnChange={changeQuantity} quantity={quantity} />
  } else {
    return (
      <Button color='secondary' onPress={addToCart}>
        Add to cart
      </Button>
    )
  }
}
