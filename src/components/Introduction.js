import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react"

export const Introduction = () => {
  return (
    <Box> 
      <Container as='Flex'size={{lg: 'lg'}} alignItems='left'>
        <Heading as='h1' size='2xl' noOfLines={1} marginBottom='1.5rem'>
          Hello World!
        </Heading>
        <Stack as='ul' listStyleType='none'>
          <Text fontSize='md'><span>🖖</span>I´m Emiliano Carrizales, a 22 years-old Frontend Developer.</Text>
          <Text fontSize='md'><span>🧑‍💻</span>Self taught programmer, an exercise addict, and a life enyojer.</Text>
          <Text fontSize='md'><span>🌎</span>A begginer in this Web Development World, learning to use Next.js</Text>
          <Text fontSize='md'><span>🌱</span> Always living in my mind.</Text>
        </Stack>
      </Container>
    </Box>
  )
}
