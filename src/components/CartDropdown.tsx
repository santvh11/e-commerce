import { Dropdown, Row, Text } from '@nextui-org/react'
import React from 'react'
import { CartIcon } from './svgs/CartIcon'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import Link from 'next/link'

export const CartDropdown = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  return (
    <Dropdown>
      <Dropdown.Button
        light auto css={{
          '@xsMax': { pl: 7, pr: 7 }
        }}
      >
        <CartIcon />
      </Dropdown.Button>
      <Dropdown.Menu aria-label='Static Actions'>
        {cartItems.map((item, i) => (
          <Dropdown.Item key={i}>

            <Link href={'/product/' + item.id}>
              <Row justify='space-between'>
                <Text>
                  {item.title}
                </Text>
                <Text>
                  {item.quantity}
                </Text>
              </Row>
            </Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
