import { Box, Button, Container, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { MdDownload } from "react-icons/md";

const Try = () => {
  return (
    <Box h={"60vh"}>
      <Container maxW={"container.xl"}>
        <Flex bg={"#151515"} w={"1300px"} h={"400px"} pos={"relative"} borderRadius={"20px"}>
          <Image src='Ball.png' pos={"absolute"} top={"-70px"} left={"-80px"} />
          <Box>
            <Heading color={"#ffffff"} fontSize={"68px"} fontWeight={"500"} w={"600px"} letterSpacing={"3px"} padding={"60px"} paddingLeft={"120px"}>Try our App
              Mobile NFT</Heading>
            <Box marginLeft={"120px"}>
              <Button bg={"transparent"} borderRadius={"10px"} border={"1px solid #fff"} color={"#fff"} display={"flex"} alignItems={"center"} gap={"5px"} justifyContent={"center"} padding={"20px"}><MdDownload color='fff' />Download Now </Button>
            </Box>
          </Box>
          <Box>
            <Image pos={"absolute"} left={"750px"} bottom={"0"} src='phone.png' />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Try
