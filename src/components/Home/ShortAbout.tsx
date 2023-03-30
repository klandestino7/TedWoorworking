import {
    Container,
    GridItem,
    Grid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    Box,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';



export default function ShortAbout() {
    return (
        <Container maxW={'930px'} py={12}>
            <Grid
                templateRows={{base: '2fr', md: '1fr'}}
                templateColumns={{base: '1fr', md: '1fr 3fr'}}
                gap={4}
            >
                <Flex
                    direction='column'
                    alignItems={"center"}
                >
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            './images/img3.jpg'
                        }
                        objectFit={'cover'}
                        maxW={"200px"}
                        maxH={"200px"}
                    />

                    <Heading as='h4' size='sm'
                        padding="15px 0"
                    >
                        Ted "Woody" Mcgrath
                    </Heading>

                    <Image
                        rounded={'md'}
                        alt={'signature'}
                        src={
                            './images/img4.jpg'
                        }
                        objectFit={'cover'}
                    />
                    <Text as="i" fontSize="sm" 
                        padding="10px 0" >Certified Master Woodworker, Educator, Trainer, Author, Member of AWI</Text>
                </Flex>

                <Stack spacing={6}>
                <Heading as='h4' size='md'>
                    From The Desk Of Ted Mcgrath
                </Heading>

                <Text fontSize='xl'>
                    <p>Re: Woodworking made easy...</p>
                    <p>Dear Fellow Woodworker,</p>
                    <br/>
                    <p>If you are reading this letter then it is likely that you have a passion...</p>
                    <br/> 
                    <p>You have a <Text as='b'>passion for woodworking.</Text></p>

                    <br/>
                    <p>For the most part you would have <Text as='u'>spent hundreds of dollars or more</Text> on woodworking projects.</p>

                    <br/>
                    <p>It will <Text as='b'>take you a lot longer than you thought</Text> or you might have quit because you got your measurements all wrong!</p>
                    
                    <br/>
                    <p>I understand your pain because I was once in your shoes.</p>

                    <br/> 
                    <Text>What if I told you that you could get your hands <Text as='b'>on 16,000 woodworking projects</Text> with already <Text as='b' background={"yellow"}>“done-for-you” plans with step-by-step blueprints</Text>?</Text>

                    <br/>
                    <Text>Imagine building ANY project you can dream of -- easily, quickly & hassle free!</Text>
                </Text>

                </Stack>
            </Grid>
        </Container>

    );
}

