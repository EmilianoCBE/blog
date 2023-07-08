import Image from "next/image"
import Link from "next/link"

import { Box, Container, Flex, Heading, Text  } from "@chakra-ui/react"

export const Contact = () => {

  return (
    <Box padding={{base: '75px', lg: '100px 0'}}> 
      <Container as='Flex' size={{lg: 'lg'}} alignItems='center' maxW="800">
        <Heading 
          as='h2' 
          fontSize='32px' 
          noOfLines={{base: 3, md: 2}} 
          marginBottom='1.5rem' 
          textAlign='center'
        >
          Where can you find me?
        </Heading>
        <Flex 
          listStyleType="none" 
          gap="1rem" 
          alignItems='flex-start' 
          margin='1rem 0' 
          as='div'
          flexDirection={{base: 'column', md: 'row'}}
          marginTop={{base: '30px', md: '50px'}} 
          justifyContent={{md: 'space-around'}}
        >
          <Box as={Flex} 
            flexDirection='column' 
            alignItems='center'
          >
            <Text lineHeight='1.8rem' textAlign='center' fontSize='20px' marginBottom='1rem'>
              You can find me on LinkedIn here: 
            </Text>
            <Link href="https://www.linkedin.com/in/emiliano-carrizales">
                <Image src="/icon-in-light.svg" alt="Linkedin icon" width="100" height="100"/>
            </Link>
          </Box>
          <Box as={Flex} flexDirection='column' alignItems='center'>
            <Text lineHeight='1.8rem' textAlign='center' fontSize='20px' marginBottom='1rem'>
              Check out my Github: 
            </Text>
            <Link href="https://github.com/EmilianoCBE">
              <Image src="/icon-github-light.svg" alt="Github icon" width="100" height="100"/>
            </Link>
          </Box> 
          <Box as={Flex} flexDirection='column' alignItems='center'>
            <Text lineHeight='1.8rem' textAlign='center' fontSize='20px' marginBottom='1rem'>
              Or send an email:
            </Text>
            {/* <Link href="https://github.com/EmilianoCBE">
              <Image src="/icon-github-light.svg" alt="Github icon" width="100" height="100"/>
            </Link> */}
            <a href="mailto:e.carrizales1305@gmail.com">e.carrizales1305@gmail.com</a>
          </Box> 
        </Flex>
      </Container>
    </Box>
  )
}
