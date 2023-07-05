import { Box, Container, Button, Text, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"

const ToolsCard = () => {
  return (
    <Box as='article' background='#FFF'>
        <Container as='Flex'msize={{lg: 'lg'}} alignItems='left'>
          <Link href='/mountains-philosophy'>
            <Box as={Flex} borderRadius='lg' p={4} alignItems='flex-start' justifyContent='space-between' border='1px' borderColor='#E6ECF8' flexDirection='column' gap='1rem' _hover={{ boxShadow: '2xl'}} transition='box-shadow 200ms ease-in-out, transform 200ms ease-in-out' _active={{boxShadow: '2xl'}}>
              <Heading as='h2' size='md'>
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
              {/* <Button>
                <Link href='/mountains-philosophy'>Go to page</Link>
              </Button>   */}
            </Box>
          </Link>
        </Container>
    </Box>
  )
}

export default ToolsCard

// {colorMode === 'light' ? 
//                   <Image src="/icon-in-light.svg" alt="" width="32" height="32"/>
//                   : <Image src="/icon-in-dark.svg" alt="" width="32" height="32"/>
//                 }