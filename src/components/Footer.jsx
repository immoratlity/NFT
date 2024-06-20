import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import { MdSunny } from "react-icons/md";
import { RxSwitch } from "react-icons/rx";
import { IoMdMoon } from "react-icons/io";
import { Link } from 'react-router-dom';
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { RiArrowRightCircleFill } from "react-icons/ri";


const Footer = () => {
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <Logo />
        <Flex align={"center"} justify={"space-between"}>
          <Box>
            <br />
            <br />
            <Heading fontSize={"41px"} fontWeight={"500"} >NFT Distro</Heading>
            <br />
            <Text fontSize={"15px"} fontWeight={"400"} color={"#6B6B6B"} w={"370px"}>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</Text>
            <br />
            <Flex align={"center"} gap={"10px"}>
              <MdSunny fontSize={"24px"} />
              <RxSwitch fontSize={"33px"} />
              <IoMdMoon fontSize={"24px"} />
            </Flex>
          </Box>
          <Flex align={"center"} gap={"90px"}>
            <Box >
              <Link><Text fontWeight={"700"}>Company</Text></Link>
              <br />
              <br />
              <Link><Text fontWeight={"400"} fontSize={"15px"}>Explore</Text></Link>
              <br />
              <Link><Text fontWeight={"400"} fontSize={"15px"}>About</Text></Link>
            </Box>
            <Box>
              <Link><Text fontWeight={"700"}>Creator</Text></Link>
              <br />
              <br />
              <Link><Text fontWeight={"400"} fontSize={"15px"}>FAQ</Text></Link>
              <br />
              <Link><Text fontWeight={"400"} fontSize={"15px"}>Become Artist</Text></Link>
            </Box>
            <Box paddingBottom={"25px"}>
              <Link><Text fontWeight={"700"}>Join our community</Text></Link>
              <br />
              <Flex w={"306px"} h={"68px"} borderRadius={"35px"} border={"2px solid #000000"}>
                <Input placeholder='Enter your email address' type='email' variant={"unstyled"} paddingLeft={"20px"}/>
                <Box  w={"85px"} h={"85px"} borderRadius={"45px"} paddingTop={"12px"}>
                <Button bg={"transparent"} variant={"unstayled"}><RiArrowRightCircleFill fontSize={"70px"} /></Button>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        <br />
        <br />
        <Flex align={"center"} justify={"space-between"}>
          <Text>© Copyright NFT Distro 2023 </Text>
          <Flex align={"center"} gap={"20px"}>
            <Box w={"35px"} h={"35px"} bg={"#F4F4F4"} borderRadius={"20px"} paddingLeft={"9px"} paddingTop={"8px"}><RiFacebookBoxFill fontSize={"17px"} color={"#838383"} /></Box>
            <Box w={"35px"} h={"35px"} bg={"#F4F4F4"} borderRadius={"20px"} paddingLeft={"11px"} paddingTop={"10px"}><FaGoogle fontSize={"14px"} color={"#838383"} /></Box>
            <Box w={"35px"} h={"35px"} bg={"#F4F4F4"} borderRadius={"20px"} paddingLeft={"11px"} paddingTop={"10px"}><FaTwitter fontSize={"14px"} color={"#838383"} /></Box>
            <Box w={"35px"} h={"35px"} bg={"#F4F4F4"} borderRadius={"20px"} paddingLeft={"11px"} paddingTop={"8px"}><FaApple fontSize={"15px"} color={"#838383"} /></Box>
          </Flex>
        </Flex>
        <br />
        <br />
        <br />
      </Container>
    </Box>
  )
}

export default Footer
