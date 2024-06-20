import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Explore = (props) => {
  return (
    <Box p={2} boxShadow={"0px 0px 21px 0px rgba(0,0,0,0.35)"} borderRadius={"20px"}>
      <Image w={"full"} src={props.image} />
      <Heading fontSize={"18px"} textAlign={"start"} py={"10px"} >{props.title}</Heading>
      <Flex justify={"space-between"} >
        <Flex align={"center"} gap={2}>
        <Image src={props.user} />
          <Text fontWeight={"700"}>{props.userName}</Text>
        </Flex>
        <Box>
          <Text fontSize={"12px"}>Current Bid</Text>
          <Text display={"flex"} gap={1} ><Image src='eth.png' />3.421</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Explore
