import { Box, Container, Flex, Heading } from "@chakra-ui/react"

export const Introduction = () => {
  return (
    <Box> 
      <Container as='Flex'size={{lg: 'lg'}} alignItems='left'>
        <Heading as='h1' size='2xl' noOfLines={1}>
          Hello World!
        </Heading>
        <ul>
          <li>I´m Emiliano Carrizales, a 22 years-old Frontend Developer</li>
          <li>Self taught programmer, an exercise addict, and a life enyojer</li>
          <li>A begginer in this Web Development World, learning to use Next.js</li>
          <li>Living in this World</li>
        </ul>
      </Container>
    </Box>
  )
}
