import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/react"

export const Introduction = () => {
  return (
    <Box> 
      <Container as='Flex'size={{lg: 'lg'}} alignItems='left'>
        <Heading as='h1' size='2xl' noOfLines={1} marginBottom='1.5rem'>
          Hello World!
        </Heading>
        <Stack as='ul' listStyleType='none'>
          <li>I´m Emiliano Carrizales, a 22 years-old Frontend Developer</li>
          <li>Self taught programmer, an exercise addict, and a life enyojer</li>
          <li>A begginer in this Web Development World, learning to use Next.js</li>
          <li>Always living in my mind</li>
        </Stack>
      </Container>
    </Box>
  )
}
