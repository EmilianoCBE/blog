// import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from 'layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  )
}
