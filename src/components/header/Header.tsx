import { Container, Link } from '@nextui-org/react'
import NextLink from 'next/link'
import { Logo } from '../svgs/isologo/Isologo'
import { SearchBar } from '../search-bar/SearchBar'
import { Navbar } from '../navbar/Navbar'

export const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  )
}
