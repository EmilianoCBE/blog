import Image from "next/image"
import Link from "next/link"

import { Box, Container, Flex, Heading, Text, useColorMode  } from "@chakra-ui/react"

export const Description = () => {

  return (
    <Box padding={{base: '75px 0', lg: '140px 0'}}> 
      <Container size={{lg: 'lg'}} alignItems='center' maxW="800">
        <Heading 
          as='h2' 
          fontSize='32px' 
          noOfLines={{base: 2, md: 1}} 
          marginBottom='1.5rem' 
          textAlign='center'
        >
          Hello World! I´m Emiliano
        </Heading>
        <Text lineHeight='1.8rem' textAlign='center' fontSize='20px'>
          I am a self-taught programmer starting his way in the world of web development. 
          I have created several applications and pages as personal projects and I have worked in a design agency as a frontend developer. 
          Always looking forward to the future and to enrich myself with new knowledge and skills to apply them not only at work, but also in my day to day life.
        </Text>
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
