import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaWallet } from "react-icons/fa";


const Hero = () => {
    return (
        <Box>
            <Container maxW={"container.xl"}>
                <Flex align={"center"} justify={"space-between"} h={"70vh"}>
                    <Box w={"45%"}>
                        <Text fontWeight={"400"} fontSize={"14px"} color={"#6B6B6B"} letterSpacing={"4px"} >WEB 3 NON-FUNGIBLE TOKENS</Text>
                        <br />
                        <Text fontWeight={"500"} fontSize={"67px"}>Unlock Unique Digital Ownership with NFTs</Text>
                        <br />
                        <Text fontWeight={"400"} fontSize={"24px"}>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</Text>
                        <br />
                        <Button
                            _hover={{
                                bg: 'linear-gradient(34deg, rgba(255,86,187,1) 0%, rgba(255,143,119,1) 63%)',
                            }}
                            bg={"linear-gradient(108.39deg, #FF56BB 6.99%, #FF8F77 119.86%)"} gap={3} w={"230px"} h={"55px"} borderRadius={"20px"} color={"#fff"}>
                            <FaWallet color='#fff' />
                            Connect Wallet
                        </Button>

                    </Box>

                    <Box>
                        <Image pos={"relative"} src='/robo.png' borderRadius={"30px"} boxShadow={" 0px 0px 21px 0px rgba(0,0,0,0.35)"} />
                        <Image pos={"absolute"} top={"133px"} left={"1530px"} w={"103px"} h={"108px"} src='/Ball.png' />
                        <Image pos={"absolute"} top={"500px"} left={"980px"} w={"203px"} h={"208px"} src='/Ball.png' />
                        <Image pos={"absolute"} top={"200px"} left={"980px"} w={"213px"} h={"90px"} src='/robbo_per.png' />
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Hero
