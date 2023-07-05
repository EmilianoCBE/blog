import Link from "next/link"

import { Box, Container, Flex, Heading, Text, useColorMode, Grid, GridItem, Image  } from "@chakra-ui/react"

export const Works = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box padding={{base: '75px 0 ', lg: '100px 0 50px'}} borderBottom='1px' borderBottomColor='#E6ECF8'> 
      <Container as='Flex' size={{lg: 'lg'}} alignItems='center' maxW="800">
        <Heading 
          as='h2' 
          fontSize='32px' 
          noOfLines={{base: 2, md: 1}} 
          marginBottom='1.5rem' 
          textAlign='center'
        >
          Recent works and projects
        </Heading>
        <Text lineHeight='1.8rem' textAlign='center' marginBottom={{base: '12px', lg: '24px'}} fontSize='20px'>
          These some of the works I´ve made using HTML, CSS, React, NexJS and ChakraUI
        </Text>

        <Grid 
          templateColumns={{base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'}} 
          templateRows={{base: 'repeat(2, 1fr)', lg: 'repeat(1, 1fr)'}} 
          gap={6}
          p={{base: '32px 36px', lg:'64px 72px'}}
        >
          <GridItem w='100%' h='100%'>
            <Link href='/'>
              <Image src='/first-p.png' alt='Portafolio image' borderRadius='base'/>
            </Link>
          </GridItem>
          <GridItem w='100%' h='100%'>
            <Link href='/'>
              <Image src='/second-p.png' alt='Portafolio image' borderRadius='base'/>
            </Link>
          </GridItem>
          <GridItem w='100%' h='100%'>
            <Link href='/'>
              <Image src='/third-p.png' alt='Portafolio image' borderRadius='base'/>
            </Link>
          </GridItem>
          <GridItem w='100%'>
            <Link href='/'>
              <Image src='/first-p.png' alt='Portafolio image' borderRadius='base'/>
            </Link>
          </GridItem>
        </Grid>

        {/* <Flex listStyleType="none" gap="1rem" alignItems='center' margin='1rem 0' as='div'>
          <Link href="https://www.linkedin.com/in/emiliano-carrizales">
            {colorMode === 'light' ? 
              <Image src="/icon-in-light.svg" alt="" width="32" height="32"/>
              : <Image src="/icon-in-dark.svg" alt="" width="32" height="32"/>
            }
          </Link>
          <Link href="https://github.com/EmilianoCBE">
            {colorMode === 'light' ? 
              <Image src="/icon-github-light.svg" alt="" width="32" height="32"/>
              : <Image src="/icon-github-dark.svg" alt="" width="32" height="32"/>
            }
          </Link>            
          <Link href="https://emilianocbe.github.io">Portfolio</Link>
        </Flex> */}
      </Container>
    </Box>
  )
}
