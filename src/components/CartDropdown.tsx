import { Button, Dropdown, Grid, Row, Text } from '@nextui-org/react'
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
        {cartItems.length
          ? (
            <Dropdown.Section>
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
            </Dropdown.Section>
            )
          : (
            <Dropdown.Item>
              <Text>Let's add some products!</Text>
            </Dropdown.Item>
            )}
        <Dropdown.Section>
          <Dropdown.Item css={{ pt: 10, pb: 10 }}>
            <Grid.Container justify='center'>
              <Button as={Link} href='/checkout/'>
                Buy now!
              </Button>
            </Grid.Container>
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  )
}
