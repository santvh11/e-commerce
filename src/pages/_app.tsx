import './globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"

const darkTheme = createTheme({
  type: 'dark',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>)
}
