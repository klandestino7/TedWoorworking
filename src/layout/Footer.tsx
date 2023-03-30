import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import SocialButton from '../components/SocialButton';

export default function Footer() {
    return (
        <Box
            bg={"rgb(236,236,236)"}
            color={"rgb(89,89,89)"}
            w="full"
            display="flex"
            justifyContent="center"
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'column' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Text> Copyright © 2023 Bidweek.shop. All Rights Reserved.</Text>
                <Stack direction={'row'} spacing={6}>
                    <Link href={"https://bidweek.shop/termos-e-condicoes/"}>
                        Terms & Conditions
                    </Link>
                    <Link href={"https://bidweek.shop/politica-de-privacidade/"}>
                        Privacy Policy
                    </Link>
                    <Link href={"https://bidweek.shop/termos-e-condicoes/"}>
                        Cookie Policy
                    </Link>
                    <Link href={"https://bidweek.shop/termos-e-condicoes/"}>
                        Disclaimer
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
}