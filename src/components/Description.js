import { Box, Container, Flex } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

export const Description = () => {
  return (
    <Box> 
      <Container as='Flex'size={{lg: 'lg'}} alignItems='left'>
        <p>This blog will serve as a thought disposer, as a life and tech knowledge
            diary, and also for curiosities and random night thoughts.
            Currently working on improving this site as it is my first blog ever so
            I wil keep learning to make this reading experience the best I can.
            I´ll also leave my social media sites so we can get in touch.
        </p>
        <Flex listStyleType="none" gap="1rem" alignItems='center' margin='1rem 0'>
          <Link href="https://www.linkedin.com/in/emiliano-carrizales">
            <Image src="/icon-in.svg" alt="" width={32} height="32"/>
          </Link>
          <Link href="https://github.com/EmilianoCBE">
            <Image src="/icon-github.svg" alt="" width={32} height="32"/>
          </Link>            <Link href="https://emilianocbe.github.io">Portfolio</Link>
        </Flex>
      </Container>
    </Box>
  )
}
