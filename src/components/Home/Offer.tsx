import { Button, ButtonProps, Image, Flex, useColorModeValue, Heading, Link, VStack, StackDivider, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

const Offer = () => {
    return (
        <Flex
            minH="20vh"
            justifyContent="center"
            padding="30px 15px"
            w="100%"
            id="offer-section"
        >
            <Box
                maxW="930px"
                display="flex"
                flexDirection="column"
                color={"rgb(51,51,51)"}
                justifyContent="space-around"
                alignItems="center"
            >
                <Box padding="10px">

                <Heading padding="20px" as='h4' size='lg' textAlign="center">
                    Here's Everything You'll Get:
                </Heading>
                </Box>

                <Box
                    maxW={"800px"}
                    padding="20px 0"
                >
                    <Image
                        src="./images/img51.jpg"
                        width={"100%"}
                    />
                </Box>

                <Heading padding="20px" as='h4' size='md' textAlign="center">
                    <Text as="i"> Plus These Amazing Bonuses:</Text>
                </Heading>

                <Heading pt={"20px"} pb="10px"  as='h3' size='2xl' color="red" textAlign="center">
                    <Text as="u"> Total Value: $487 + $39/m </Text>
                </Heading>
                
                <Heading pb={"20px"} as='h3' size='xl' color="black" textAlign="center">
                    Get Started For A One Time Fee Of:
                </Heading>

                <Heading padding="20px" as='h2' size='4xl' color="green" textAlign="center" id="price-section">
                    <Text as="u"> $67.00 </Text>
                </Heading>

                <Heading padding="20px" maxW="650px" as='h4' size='md' textAlign="center">
                    (This is a special launch offer only, I reserve the right to end this discount anytime after April 2, 2023)
                </Heading>

                <Link
                    href={""}
                    target="_blank"
                >
                    <Button
                        px={8}
                        size="lg"
                        minW="300px"
                        minH="80px"
                        backgroundColor={"rgb(247,153,0)"}
                        backgroundImage={"linear-gradient(rgb(247,153,0) 0%,rgb(245,119,0) 100%)"}
                        fontSize="3xl"
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                    >
                        Add To Cart
                    </Button>
                </Link>

                <Heading padding="20px" as='h4' size='md' textAlign="center" color="blue">
                    <Link href={""} as="u">Get Instant Access to 16,000 Projects Now</Link>
                </Heading>

                <Image
                        src="./images/img52.jpg"
                />

                <Text maxW="700px" textAlign={"center"} p="20px 0">This is a <Text as="u">one-time</Text> purchase. There are NO monthly fees. I reserve the right to end this discount at anytime without warning after April 2, 2023</Text>
            </Box>
        </Flex>
    )
}

export default Offer
