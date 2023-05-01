import { Button, Navbar as UiNavbar } from '@nextui-org/react'
import NextLink from 'next/link'
import { Isologo } from '@/components/svgs/isologo/Isologo'
import { SearchBar } from '@/components/search-bar/SearchBar'
import { Isotipo } from '@/components/svgs/isotipo/Isotipo'

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

      <UiNavbar.Content>
        <UiNavbar.Item>
          <Button auto flat>
            Login
          </Button>
        </UiNavbar.Item>
        <UiNavbar.Item>
          <Button auto flat>
            Sign Up
          </Button>
        </UiNavbar.Item>
      </UiNavbar.Content>
    </UiNavbar>
  )
}
