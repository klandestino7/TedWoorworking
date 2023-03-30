import { Button, ButtonProps, Image, Flex, useColorModeValue, Heading, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';


const ProjectsTypes = () => {
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
                    <Heading as='h2' size='xl' textAlign="center">
                        Types of Projects You Can Build Today
                    </Heading>
                    
                    <Heading as='h4' size='md' textAlign="center">
                    Just a small sample of over thousands of other projects
                    </Heading>
                </Box>

                <Box
                    maxW={"800px"}
                    padding="20px 0"
                >
                    <Image
                        src="./images/img15.jpg"
                        width={"100%"}
                    />
                    <Image
                        src="./images/img16.jpg"
                        width={"100%"}
                    />
                    
                    <Image
                        src="./images/img17.jpg"
                        width={"100%"}
                    />
                </Box>

                <Heading padding="20px" as='h4' size='lg' textAlign="center">
                    Plus Thousand More Projects!
                </Heading>
            </Box>
        </Flex>
    )
}

export default ProjectsTypes