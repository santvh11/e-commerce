import { Button, Text } from '@nextui-org/react'

interface Props {
quantity: number
handleOnChange: (newQuantity: number) => void
}

export const QuantitySelector = ({ quantity, handleOnChange }: Props) => {
  return (
    <>
      <Button auto onClick={() => handleOnChange(quantity - 1)}>
        -
      </Button>
      <Text>
        {quantity}
      </Text>
      <Button auto onClick={() => handleOnChange(quantity + 1)}>
        +
      </Button>
    </>
  )
}
