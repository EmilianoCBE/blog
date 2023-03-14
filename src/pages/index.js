import Head from 'next/head'

import { Container } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import { Introduction } from '@/components/Introduction'
import { Description } from '@/components/Description'
import ArticlesContainer from '@/components/ArticlesContainer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Container size={{lg: 'lg'}}>
          <Introduction />

          <Description />

          <ArticlesContainer />
        </Container>
      </main>
    </>
  )
}
