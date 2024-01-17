import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    AspectRatio,
    Image,
    Heading
} from '@chakra-ui/react';

export default function WithSubnavigation() {

    return (
        <Box>
            <Flex
                bg={"#fff9d9"}
                color={useColorModeValue('whiteAlpha.900', 'white')}
                minH={'470px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                justifyContent="space-between"
                direction="column"
                padding="20px 50px"
                zIndex="10"
            >
                <AspectRatio 
                    minWidth="220px"
                    ratio={16 / 5}
                >
                    <Image
                        src="./logo.png"
                    />
                </AspectRatio>

                <Box textAlign={"center"}   
                    margin="20px"
                
                >
                    <Heading as='h3' size={{base: 'md', md: 'lg'}} color="black" margin="5px">
                        Announcing The World's <Text as='u'>Largest Collection</Text> of
                    </Heading>

                    <Heading as='h2' size={{base: '2xl', md: '3xl'}} color="rgb(238,71,0)" margin="5px">
                        16,000 Woodworking Plans
                    </Heading>
                </Box>

                <Box
                    maxW={"800px"}
                    width="90vw"
                >
                    <Image
                        src="./images/img-1.jpg"
                        width={"100%"}
                    />
                    <Image
                        src="./images/img-2.jpg"
                        width={"100%"}
                    />
                </Box>
            </Flex>
        </Box>
    );
}
