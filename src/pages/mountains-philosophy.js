import Head from "next/head";

import { Box, Container, Stack, Heading, Text, Button } from "@chakra-ui/react";

import { Header } from "@/components/Header";
import Link from "next/link";

export default function MountainsOfPhilosophy(){
  return(
    <>
        <Head>
            <title>Mountains of Philosphy</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <main>
            <Container maxWidth='43.75rem' marginBottom='2rem'>
                <Box> 
                    <Container as='Flex' size={{lg: 'xl'}} alignItems='left' m='0 10rem'>
                        <Heading as='h1' size={{base: 'xl', md:'2xl'}} noOfLines={1} marginBottom='1.5rem'>
                            Mountains of Philosphy
                        </Heading>
                        <Stack as='ul' listStyleType='none' spacing='2rem'>
                            <Text lineHeight='1.8rem'>
                            I have reached a moment in my life in which I do not have so much desire for material things, but rather, my hunger for knowledge has increased, with this I have delimited two objectives: I want to learn to write and also to learn about philosophy. 
                            To learn any skill is necessary both theory and practice and in the case of writing is required, redundancy aside, to write a lot so I started this blog as a writing exercise to encourage the increase of my vocabulary and understand the structures of writing. 
                            Also my main objective is to learn philosophy, which has a lot of vocabulary that I do not understand and that is why I want to increase it.
                            </Text>
                            <Text lineHeight='1.8rem'>
                            Philosophy is, for me, a set of mountains that on their way have different knowledge and each mountain represents a branch of philosophy. 
                            Climbing mountains is an activity that requires time, effort and patience, you need to enjoy the way, face easy and difficult paths, see the beauty of each stretch and feel satisfied to reach the top. 
                            But no climber or mountaineer or hiker I know has ever been satisfied with just one mountain, they have wanted to climb more and more, getting new ways of seeing nature and different views on the mountain tops. 
                            For me, this is the road to philosophy, a long and probably endless road, but when I realized that the stimulus I got from thinking about the why of things and that this knowledge can be expanded, I knew I wanted to enter this world.
                            </Text>
                            <Text lineHeight='1.8rem'>
                            A path of patience awaits me, the good thing is that I have it very developed, however it is possible that I find myself with mountains that I still can not climb, but like many things in this life, it is a matter of training and strengthening yourself to be able to rise.
                            </Text>
                        </Stack>
                    </Container>
                </Box>
                <Button>
                    <Link href='/'>Back to Home</Link>
                </Button>
            </Container>
        </main>
    </>
  )
}