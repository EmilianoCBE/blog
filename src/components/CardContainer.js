import { Box, Container, Button, Text, Flex, Heading } from "@chakra-ui/react"

const CardContainer = ({children}) => {
  return (
    <Box as='article' background='#FFF' minW={{sm: '200px', lg: '400px'}} maxW={'320px'}>
        <Container as='Flex' size={{lg: 'lg'}}>
          <Box as={Flex} 
            borderRadius='lg' 
            p={4} 
            justifyContent='space-between' 
            border='1px' 
            borderColor='#E6ECF8' 
            flexDirection='column' 
            gap='1rem'
            // _hover={{ boxShadow: '2xl'}} 
            // transition='box-shadow 200ms ease-in-out, transform 200ms ease-in-out' 
            // _active={{boxShadow: '2xl'}} 
            marginTop='-6rem'
            background='#FFF'
            alignItems='center'
            textAlign='center'
          >
            {children}
          </Box>
        </Container>
    </Box>
  )
}

export default CardContainer

// {colorMode === 'light' ? 
//                   <Image src="/icon-in-light.svg" alt="" width="32" height="32"/>
//                   : <Image src="/icon-in-dark.svg" alt="" width="32" height="32"/>
//                 }