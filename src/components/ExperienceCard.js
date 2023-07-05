import { Box, Container, Button, Text, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"

const ExperienceCard = () => {
  return (
    <Box as='article' background='#FFF'>
        <Container as='Flex'msize={{lg: 'lg'}} alignItems='left'>
          <Link href='/mountains-philosophy'>
            <Box as={Flex} borderRadius='lg' p={4} alignItems='flex-start' justifyContent='space-between' border='1px' borderColor='#E6ECF8' flexDirection='column' gap='1rem' _hover={{ boxShadow: '2xl'}} transition='box-shadow 200ms ease-in-out, transform 200ms ease-in-out' _active={{boxShadow: '2xl'}}>
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
              {/* <Button>
                <Link href='/mountains-philosophy'>Go to page</Link>
              </Button>   */}
            </Box>
          </Link>
        </Container>
    </Box>
  )
}

export default ExperienceCard

// {colorMode === 'light' ? 
//                   <Image src="/icon-in-light.svg" alt="" width="32" height="32"/>
//                   : <Image src="/icon-in-dark.svg" alt="" width="32" height="32"/>
//                 }