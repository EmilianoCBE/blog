import { Box, Container, Flex } from "@chakra-ui/react"

const CardContainer = ({children}) => {
  return (
    <Box as='article' background='#FFF'>
        <Container size={{lg: 'lg'}}>
          <Box as={Flex} 
            borderRadius='lg' 
            p={4} 
            justifyContent='space-between' 
            border='1px' 
            borderColor='#E6ECF8' 
            gap={{base: '1rem', md: '1.5rem'}}
            flexDirection='column'
            // _hover={{ boxShadow: '2xl'}} 
            // transition='box-shadow 200ms ease-in-out, transform 200ms ease-in-out' 
            // _active={{boxShadow: '2xl'}} 
            minW={{base: '320px', sm: '400px', md: '230px', lg: '300px', xl: '400px'}} 
            marginTop={{base: '0', md: '-6rem'}}
            background='#FFF'
            alignItems='center'
            textAlign='center'
            maxW={{md: '230px', lg: 'auto'}}
            minH={{base: '100px', md: '200px'}}
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