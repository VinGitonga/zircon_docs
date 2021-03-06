import {
    Button,
    Box,
    chakra,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from "next/router"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Head from "next/head"


const Landing = () => {
    const router = useRouter()
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,100&display=swap" rel="stylesheet" />
                <title>Zircon</title>
            </Head>
            <Box pos="relative" overflow="hidden" bg={"#1a202c"} h={"100vh"} fontFamily={"Poppins"}>
                <Box maxW="7xl" mx="auto">
                    <Box
                        pos="relative"
                        pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                        w="full"
                        border="solid 1px transparent"
                    >
                        <Box
                            mx="auto"
                            maxW={{ base: "7xl" }}
                            px={{ base: 4, sm: 6, lg: 8 }}
                            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
                        >
                            <Box
                                textAlign="center"
                                w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                                mx="auto"
                            >
                                <chakra.h1
                                    fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                                    letterSpacing="tight"
                                    lineHeight="short"
                                    fontWeight="extrabold"
                                    color={useColorModeValue("gray.900", "white")}
                                >
                                    <chakra.span
                                        display={{ base: "block", xl: "inline" }}
                                        color={"#cbceeb"}
                                    >
                                        Zircon Docs
                                    </chakra.span>
                                    <br />
                                    <chakra.span
                                        display={{ base: "block", xl: "inline" }}
                                        color={useColorModeValue("purple.900", "purple.500")}
                                    // color={"#3c4178"}
                                    >
                                        Decentralized medical data sharing system.
                                    </chakra.span>
                                </chakra.h1>
                                <chakra.p
                                    mt={{ base: 3, sm: 5, md: 5 }}
                                    mx={{ sm: "auto", lg: 0 }}
                                    mb={6}
                                    fontSize={{ base: "lg", md: "xl" }}
                                    color="gray.500"
                                    lineHeight="base"
                                >
                                    A secure app that allows hospital admins transfer patient data to other hospital.
                                </chakra.p>
                                <Stack
                                    direction={{ base: "column", sm: "column", md: "row" }}
                                    mb={{ base: 4, md: 8 }}
                                    spacing={{ base: 4, md: 2 }}
                                    justifyContent="center"
                                >
                                    <WalletMultiButton />
                                    <Button
                                        bg="white"
                                        color={"gray.900"}
                                        size="lg"
                                        onClick={() => router.push('/')}
                                    >
                                        Get Started
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Landing