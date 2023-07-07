// import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/bevan/400.css'
import '@fontsource/oxygen/700.css'


const theme = extendTheme({
  fonts: {
    heading: `'Bevan', sans-serif`,
    body: `'Oxygen', sans-serif`,
  },
})

export default function App({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}
