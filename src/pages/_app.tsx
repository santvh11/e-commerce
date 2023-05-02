import './globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const darkTheme = createTheme({
  type: 'dark'
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  )
}
