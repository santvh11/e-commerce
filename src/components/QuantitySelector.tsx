import { Button, Grid, Row, Text } from '@nextui-org/react'
import { TrashIcon } from './svgs/TrashIcon'

interface Props {
quantity: number
handleOnChange: (newQuantity: number) => void
}

export const QuantitySelector = ({ quantity, handleOnChange }: Props) => {
  return (
    <Row>
      <Button color='warning' css={{ mr: 10 }} size='sm' auto rounded onPress={() => handleOnChange(0)}>
        <TrashIcon />
      </Button>
      <Button color='secondary' css={{ fontSize: 19 }} size='sm' auto rounded onPress={() => handleOnChange(quantity - 1)}>
        -
      </Button>
      <Text css={{ ml: 10, mr: 10 }}>
        {quantity}
      </Text>
      <Button color='secondary' css={{ fontSize: 15 }} size='sm' auto rounded onPress={() => handleOnChange(quantity + 1)}>
        +
      </Button>
    </Row>
  )
}
