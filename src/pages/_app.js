// import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import {defineStyle, defineStyleConfig} from '@chakra-ui/react'

// const sizes = {
//   lg: defineStyle({
//     maxW: '1110px',
//     p: 0
//   }),
// }

// export const containerTheme = defineStyleConfig({ sizes })

// const theme = extendTheme({
//   components: {
//     Container: containerTheme
//   }
// })



export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
