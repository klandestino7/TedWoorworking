import { Button, ButtonProps, Flex, useColorModeValue, Heading, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

interface Props 
{
    headline: string;
    color: string;
    fontColor: string;
}

const Headline : React.FC<Props> = ({headline, color, fontColor}) => {
    return (
        <Flex
            minH="20vh"
            justifyContent="center"
            bgColor={color}
            padding="30px 15px"
            color={fontColor}
        >
            <Box
                maxW="930px"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                alignItems="center"
            >
                <Box>
                    <Heading as='h2' size='xl' textAlign="center">
                        {headline}
                    </Heading>
                </Box>
            </Box>
        </Flex>
    )
}

export default Headline