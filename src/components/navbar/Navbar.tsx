import { Button, Navbar as UiNavbar } from "@nextui-org/react"
import NextLink from "next/link"
import { Logo } from "../logo/Logo"

export const Navbar = () => {
    return (
        <UiNavbar isCompact variant="static">
            <UiNavbar.Brand>
                <Logo />
            </UiNavbar.Brand>

            <UiNavbar.Content>
                <UiNavbar.Link as={NextLink} href="/">
                    Home
                </UiNavbar.Link>
                <UiNavbar.Link as={NextLink} href="/offers">
                    Offers
                </UiNavbar.Link>
                <UiNavbar.Link as={NextLink} href="/about-us">
                    About
                </UiNavbar.Link>
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
