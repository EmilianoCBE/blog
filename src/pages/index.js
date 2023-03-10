import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Header } from '@/components/Header'
import { Introduction } from '@/components/Introduction'
import { Button, Container } from '@chakra-ui/react'
import { Description } from '@/components/Description'

// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Container size={{lg: 'lg'}}>
          <Introduction />

          <Description />
        </Container>
      </main>
      
    </>
  )
}
