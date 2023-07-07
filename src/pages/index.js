import Head from 'next/head'

import { Box, Container, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import { Introduction } from '@/components/Introduction'
import { Description } from '@/components/Description'
import CardContainer from '@/components/CardContainer'
import { Works } from '@/components/Works'
import { Contact } from '@/components/Contact'

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
        <Container size={{lg: 'lg'}} maxW="800">
          <Introduction />
        </Container>
        <Box backgroundColor='#356dff'>
          <Container size={{lg: 'lg'}} maxW="800">
            <Description />
          </Container>
        </Box>
        <Flex 
          paddingX={{base: '15px', lg: '30px'}}  
          flexDirection={{base: 'column', md: 'row'}} //md=770px sm=480px lg=990px
          alignItems='center'
          gap={{base: '1rem', md: '1.5rem'}}
          marginTop={{base: '1.5rem', md: '1.5rem'}}
          // flexDirection={{xs: 'column', lg: 'row'}}
          justifyContent={{md: 'space-around'}}
        >
          <CardContainer>
            <Image src='/languages.svg' boxSize='100px' alt='Laptop, tablet and cellphone icon'/>
            <Heading 
              as='h2' 
              size='md'
              noOfLines={{base: 2, lg: 1}}
            >
              Known languages and frameworks
            </Heading>
            <Text>
              HTML
            </Text>
            <Text>
              CSS
            </Text>
            <Text>
              JavaScript
            </Text>
          </CardContainer>
          <CardContainer>
            <Image src='/devtools.svg' boxSize='100px' alt='Laptop icon'/>
            <Heading as='h2' size='md' >
              Dev Tools
            </Heading>
            <Text>
              VSCode
            </Text>
            <Text>
              Git
            </Text>
            <Text>
              Github
            </Text>
          </CardContainer>
          <CardContainer>
            <Image src='/stats.svg' boxSize='100px' alt='List icon'/>
            <Heading as='h2' size='md'>
              Stats and Experience
            </Heading>
            <Text>
              Courses
            </Text>
            <Text>
              Platzi
            </Text>
            <Text>
              Design Agency
            </Text>
          </CardContainer>
        </Flex>

        <Works />

        <Box backgroundColor='#356dff'>
          <Container size={{lg: 'lg'}} maxW="800">
            <Contact />
          </Container>
        </Box>
      </main>
    </>
  )
}
