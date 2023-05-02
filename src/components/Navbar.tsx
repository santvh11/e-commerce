import { Avatar, Dropdown, Text, Navbar as UiNavbar } from '@nextui-org/react'
import NextLink from 'next/link'
import { Isologo } from './svgs/Isologo'
import { SearchBar } from './SearchBar'
import { Isotipo } from './svgs/Isotipo'
import { CartDropdown } from './CartDropdown'

export const Navbar = () => {
  return (
    <UiNavbar shouldHideOnScroll isBordered variant='floating'>
      <UiNavbar.Brand>
        <NextLink href='/'>
          <UiNavbar.Content hideIn='xs'>
            <Isologo />
          </UiNavbar.Content>
          <UiNavbar.Content showIn='xs'>
            <Isotipo />
          </UiNavbar.Content>
        </NextLink>
      </UiNavbar.Brand>

      <UiNavbar.Content css={{ w: '100%', ml: 20, mr: 10 }}>
        <SearchBar data={[]} />
      </UiNavbar.Content>

      <UiNavbar.Content gap={0}>
        <CartDropdown />

        <Dropdown placement='bottom-right'>
          <UiNavbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as='button'
                color='primary'
                size='md'
                src='https://i.pravatar.cc/150?u='
              />
            </Dropdown.Trigger>
          </UiNavbar.Item>
          <Dropdown.Menu
            aria-label='User menu actions'
            color='secondary'
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key='profile' css={{ height: '$18' }}>
              <Text b color='inherit' css={{ d: 'flex' }}>
                Signed in as
              </Text>
              <Text b color='inherit' css={{ d: 'flex' }}>
                jhon@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key='help_and_feedback' withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key='logout' withDivider color='error'>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </UiNavbar.Content>
    </UiNavbar>
  )
}
