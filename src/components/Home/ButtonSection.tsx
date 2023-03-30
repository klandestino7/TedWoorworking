


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
                maxW="930px"
                display="flex"
                flexDirection="column"
                color={"rgb(51,51,51)"}
                justifyContent="space-around"
                alignItems="center"
            >
                <Link
                    href={"https://hop.clickbank.net/?affiliate=antoniapao&vendor=tedsplans&pid=orderp"}
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
                        Click here to get Ted´s Woodworking
                    </Button>
                </Link>
            </Box>
        </Flex>
    )
}

export default ButtonSection