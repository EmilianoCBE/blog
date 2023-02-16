import { Container, Box, Flex, Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <Box bg='white' w='100%' p={2}>
      <Container as={Flex} color='black' justifyContent='space-between' fontSize="md" size="lg" fontWeight="bold">
          <Flex gap='1.5rem'>
              <Flex><Link href='#'>Emiliano</Link></Flex>
              {/* <Flex><Button><Image src='/public/moon.svg' alt='moon' width='20' height='20' /></Button></Flex> */}
          </Flex>

          <Flex as="ul" listStyleType="none" gap="2rem">
            <li><Link href="https://github.com/EmilianoCBE">Github</Link></li>
            <li><Link href="https://emilianocbe.github.io">Portfolio</Link></li>
            <li><Link href="https://www.linkedin.com/in/emiliano-carrizales">Linkedin</Link></li>
          </Flex>
        </Container>          
    </Box>
  )
}
