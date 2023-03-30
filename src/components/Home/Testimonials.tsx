import { Button, ButtonProps, Image, Flex, useColorModeValue, Heading, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

const Testimonials = () => {
    return (
        <Flex
            minH="20vh"
            justifyContent="center"
            padding="30px 15px"
            w="100%"
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
                    Plus Many More Testimonials From Facebook Fans!
                    </Heading>
                </Box>

                <Box
                    maxW={"800px"}
                    padding="20px 0"
                >
                    <Image
                        src="./images/comments/img29.jpg"
                        width={"100%"}
                    />
                    <Image
                        src="./images/comments/img29.jpg"
                        width={"100%"}
                    />
                    
                    <Image
                        src="./images/comments/img30.jpg"
                        width={"100%"}
                    />
                    <Image
                        src="./images/comments/img31.jpg"
                        width={"100%"}
                    />
                    <Image
                        src="./images/comments/img32.jpg"
                        width={"100%"}
                    />
                    <Image
                        src="./images/comments/img33.jpg"
                        width={"100%"}
                    />
                    <Image
                        src="./images/comments/img34.jpg"
                        width={"100%"}
                    />
                </Box>
            </Box>
        </Flex>
    )
}

export default Testimonials