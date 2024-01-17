


import { Button, ButtonProps, Image, Flex, Link, useColorModeValue, Heading, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

const ButtonSection = () => {
    return (
        <Flex
            justifyContent="center"
            padding="30px 15px"
            w="100%"
        >
            <Box
                maxW="lg"
                display="flex"
                flexDirection="column"
                color={"rgb(51,51,51)"}
                justifyContent="center"
                alignItems="center"
                
            >
                <Link
                    href={""}
                    target="_blank"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        px={8}
                        maxW="90vw"

                        minH="80px"
                        backgroundColor={"rgb(247,153,0)"}

                        backgroundImage={"linear-gradient(rgb(247,153,0) 0%,rgb(245,119,0) 100%)"}
                        fontSize={{base: 'xl', md: '3xl'}}

                        flexWrap="wrap"
                        whiteSpace={"normal"}
                        
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                    >
                        Click here to get Ted´s Woodworking
                    </Button>
                </Link>
            </Box>
        </Flex>
    )
}

export default ButtonSection
