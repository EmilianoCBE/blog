import Image from 'next/image'
import Link from 'next/link'

import { Container, Box, Flex, Button, Hide, useColorMode } from '@chakra-ui/react'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box w='100%' p='2rem 0'>
      <Container as={Flex} maxWidth='1110px' justifyContent='space-between' fontSize="md" fontWeight='bold' alignItems='center' size={{lg: 'lg'}}>
          <Flex gap='1.5rem' alignItems='center' width={{base: '100%', md: 'initial'}} justifyContent='space-between'>
              <Flex>
                <Link href='#'>Emiliano</Link>
              </Flex>
              <Flex>
                  <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? 'Dark mode' : 'Light mode'}
                  </Button>
              </Flex>
          </Flex>

          <Hide below='sm'>
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
              </Link>
              <Link href="https://emilianocbe.github.io">Portfolio</Link>
            </Flex>
          </Hide>
        </Container>          
    </Box>
  )
}
