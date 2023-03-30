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



export default function ExplainProduct() {
    return (
        <Container maxW={'930px'} py={12}>
            <Grid
                templateRows='repeat(1, 1fr)'
                templateColumns='1fr 2fr'
                gap={8}
            >
                <Flex
                    direction='column'
                    alignItems={"center"}
                >
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            './images/img5.jpg'
                        }
                        objectFit={'cover'}
                    />
                </Flex>

                <Stack spacing={6}>
                    

                    <Text fontSize='xl'>
                        <p><Text as='b'>Here's the BIG problem:</Text> Most plans and woodworking magazines are <Text as='b'> <Text as="u">complete garbage.</Text></Text></p>
                        <br />
                        <Box
                            background="rgb(255,255,233)"
                            border="3px solid rgb(217,217,217)"
                            borderRadius={"5px"}
                            padding="20px 20px"
                            marginBottom="20px"
                        >
                            <p>Why? They skip over many important parts, their diagrams are confusing, unclear, or even wrong.</p>
                            <br/>
                            <Text as='b'>No wonder woodworking seemed so hard!</Text>
                            <Text>The truth is, I have spent a ton of time looking online and reading magazines. Most of them just <Text as='b'>left me with more questions than answers.</Text></Text>
                        </Box>

                        <br/>
                        <p>Well, luckily for you, these problems become a blessing in disguise because I have spent the <Text as='b'>last 40 years</Text> to put together the <Text as='b'>world's most comprehensive collection</Text> of woodworking plans.</p>

                        <br/> 
                        <Text>What if I told you that you could get your hands <Text as='b'>on 16,000 woodworking projects</Text> with already <Text as='b' background={"yellow"}>“done-for-you” plans with step-by-step blueprints</Text>?</Text>

                        <br/>
                        <Text as="i">Imagine building ANY project you can dream of -- easily, quickly & hassle free!</Text>
                    </Text>

                </Stack>
            </Grid>
        </Container>

    );
}

