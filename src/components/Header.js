import { Container, Box, Flex, Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useColorMode } from '@chakra-ui/react'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box w='100%' p={2} marginBottom='1rem'>
      <Container as={Flex} maxWidth='1110px' justifyContent='space-between' fontSize="md" fontWeight='bold' alignItems='center' size={{lg: 'lg'}}>
          <Flex gap='1.5rem' alignItems='center'>
              <Flex><Link href='#'>Emiliano</Link></Flex>
              {/* <Flex><Button><Image src='/public/moon.svg' alt='moon' width='20' height='20' /></Button></Flex> */}
              <Flex>
                <Button onClick={toggleColorMode}>
                  {/* {colorMode === 'light' ? <Image src='/moon.svg' alt='moon' width='20' height='20' /> : <Image src='/sun.svg' alt='moon' width='20' height='20' />} */}
                  {colorMode === 'light' ? 'Dark mode' : 'Light mode'}
                </Button>
              </Flex>
          </Flex>

          <Flex listStyleType="none" gap="1rem" alignItems='center'>
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
              {/* <Image src="/icon-github-light.svg" alt="" width={32} height="32"/> */}
            </Link>
            <Link href="https://emilianocbe.github.io">Portfolio</Link>
          </Flex>

          {/* <Flex gap="1rem">
              <Link href="https://github.com/EmilianoCBE">
                <Image src="/icon-github.svg" alt="" width={24} height="24"/>
              </Link>
              
              <Link href="#">
                <Image src="/icon-twiter.svg" alt="" width={24} height="24"/>
              </Link>
              
              <Link href="#">
                <Image src="/icon-instagram.svg" alt="" width={24} height="24"/>
              </Link>
              
              <Link href="#">
                <Image src="/icon-pinterest.svg" alt="" width={24} height="24"/>
              </Link>
          </Flex>   */}
        </Container>          
    </Box>
  )
}
