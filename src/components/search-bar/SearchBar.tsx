import { FormElement, Input, useTheme } from '@nextui-org/react'
import { ChangeEvent, useState } from 'react'
import { SearchIcon } from '../svgs/search-icon/SearchIcon'

interface Props {
    data: any[]
}

export const SearchBar = ({ data }: Props) => {
    const { theme } = useTheme()
    const [query, setQuery] = useState("")

    const handleOnChange = (e: ChangeEvent<FormElement>) => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    return (
        <Input
            clearable
            contentLeft={<SearchIcon color={theme?.colors.accents6.value} size={16} />}
            contentLeftStyling={false}
            css={{
                w: "100%",
                "@xsMax": {
                    mw: "300px",
                },
                "& .nextui-input-content--left": {
                    ml: "$5",
                    dflex: "center",
                },
            }
            }
            placeholder="Search..."
        />
    )
}
