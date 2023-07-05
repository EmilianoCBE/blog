import { Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"

export const Introduction = () => {
  return (
    <Container size={{lg: 'lg'}} p='48px'>
        <Flex flexDirection='column' alignItems='center'> 
        <Heading as='h1' size='2xl' noOfLines={{base: 2, md: 1}} marginBottom='1.5rem' textAlign='center'>
          Frontend Developer
        </Heading>
        <Heading as='h2' fontSize='24px' noOfLines={1} marginBottom='1.5rem' textAlign='center' fontWeight='500'>
          Hello World! 
        </Heading>
        <Image borderRadius='full' boxSize='250px' src='/main.JPG' alt='Emiliano'/>
        <Image src='/browser-coding-svgrepo-com.svg' alt='Coding icon' />
      </Flex>
    </Container>
  )
}
