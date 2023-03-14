import Image from "next/image"
import Link from "next/link"

import { Box, Container, Flex, Text, useColorMode  } from "@chakra-ui/react"

export const Description = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box> 
      <Container as='Flex'msize={{lg: 'lg'}} alignItems='left'>
        <Text lineHeight='1.8rem'>
            This blog will serve as a thought disposer, as a life and tech knowledge
            diary, and also for curiosities and random night thoughts.
            Currently working on improving this site as it is my first blog ever so
            I´ll keep learning to make this reading experience the best I can.
            I´ll also leave my social media sites so we can keep in touch.
        </Text>
        <Flex listStyleType="none" gap="1rem" alignItems='center' margin='1rem 0'>
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
      </Container>
    </Box>
  )
}
