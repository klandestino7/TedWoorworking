import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    AspectRatio,
    Image,
    Heading
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import SocialButton from '../components/SocialButton';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const imageFromRouter : any =
{
    "/conectar": { title: "Conectar", sub: "Para ficar por dentro de todas as informações sobre os nossos encontros clique em QUERO PARTICIPAR e entre para o grupo privado de WhatsApp de interesse.", image : "./images/banner/conectar.jpg"},
    "/sobre": { title: "Sobre nós", sub:"", image : "./images/banner/sobre.jpg"},
    "/contribuir": { title: "Contribuir", sub:"", image : "./images/banner/contribuir.jpg"}
}


export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const Router  = useRouter();

    const [ title, setTitle ] = useState("Tabernáculo");
    const [ subTitle, setSubTitle ] = useState("");
    const [ banner, setBanner ] = useState("./images/banner/conectar.jpg"); 

    useEffect(() =>
    {
        if (imageFromRouter[Router.asPath])
        {
            setTitle(imageFromRouter[Router.asPath].title);
            setBanner(imageFromRouter[Router.asPath].image);
            setSubTitle(imageFromRouter[Router.asPath].sub);
        }
    }, [Router.asPath]);

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
                    <Heading as='h3' size='lg' color="black" margin="5px">
                        Announcing The World's <Text as='u'>Largest Collection</Text> of
                    </Heading>

                    <Heading as='h2' size='3xl' noOfLines={1} color="rgb(238,71,0)" margin="5px">
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