import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaWallet } from "react-icons/fa";

const Collection = (props) => {
  return (
    <Box p={"20px"} boxShadow={"0px 0px 21px -10px rgba(0,0,0,0.35)"} borderRadius={"20px"} bgColor={"#fff"}>
      <Flex align={"center"} gap={5} >
        <Image w={"310px"} h={"350px"} src={props.image} />
        <Box>
          <Flex align={"center"} gap={2}>
            <Image src={props.user} />
            <Heading fontSize={"15px"}>{props.userName}</Heading>
          </Flex>
          <br />
          <Text fontSize={"32px"} fontWeight={"700"}>{props.title}</Text>
          <br />
          <Text fontSize={"12px"}>Description</Text>
          <br />
          <Text fontSize={"12px"}>We would like to present you The Exboot 3D - Watching you~</Text>
            <br />
          <Flex align={"center"} gap={5}>
            <Box>
              <Text fontSize={"12px"}>Current Bid</Text>
              <Text display={"flex"} gap={1} fontSize={"14px"} fontWeight={"700"} ><Image src='eth.png' />3.421</Text>
            </Box>
            <Box>
              <Text fontSize={"12px"}>End in</Text>
              <Text fontSize={"14px"} fontWeight={"700"} >1h 12m 14s</Text>
            </Box>
          </Flex>
          <br />
          <Button
            _hover={{
              bg: 'linear-gradient(34deg, rgba(255,86,187,1) 0%, rgba(255,143,119,1) 63%)',
            }}
            bg={"linear-gradient(108.39deg, #FF56BB 6.99%, #FF8F77 119.86%)"} gap={3} w={"230px"} h={"55px"} borderRadius={"20px"} color={"#fff"}>
            <FaWallet color='#fff' />
            Place Bid
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Collection
