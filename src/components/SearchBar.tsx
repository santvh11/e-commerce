import { Button, Dropdown, FormElement, Input, Row, Text, useTheme } from '@nextui-org/react'
import { ChangeEvent, useState } from 'react'
import { SearchIcon } from './svgs/SearchIcon'
import { Product } from '@/utils/types'
import Link from 'next/link'

interface Props {
    data: Product[]
}

export const SearchBar = ({ data }: Props) => {
  const { theme } = useTheme()
  const [query, setQuery] = useState('')

  const handleOnChange = (e: ChangeEvent<FormElement>) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  const mathcingResults = data.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <Row>
      <Input
        clearable
        contentLeftStyling={false}
        onChange={handleOnChange}
        css={{
          zIndex: 99,
          w: '100%',
          '@xsMax': {
            mw: '300px'
          },
          '& .nextui-input-content--left': {
            ml: '$5',
            dflex: 'center'
          }
        }}
        placeholder='Search...'
      />
      <Dropdown>
        <Dropdown.Trigger>
          <Button auto light>
            <SearchIcon
              color={theme?.colors.white.value}
              size={25}
            />
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu items={mathcingResults}>
          {(item) => (
            <Dropdown.Item key={item.id}>
              <Link href={'/product/' + item.id}>
                <Text>
                  {item.title}
                </Text>
              </Link>
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </Row>
  )
}
