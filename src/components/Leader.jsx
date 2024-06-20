import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Leader = (props) => {
  return (
    <Box w={"160px"} pos={"relative"}>
      <Box bgColor={"#fff"} w={"33px"} h={"33px"} pos={"absolute"} bottom={"220px"} left={"62px"} borderRadius={"20px"} paddingTop={"5px"}>
        <Heading fontSize={"19px"} textAlign={"center"}>{props.number}</Heading>
      </Box>
      <Image src={props.user} w={"200px"} />
      <Text color={"#FFFFFF"} fontSize={"26px"} fontWeight={"500"} textAlign={"center"} paddingTop={"20px"}>{props.userName}</Text>
      <Text display={"flex"} gap={1} fontSize={"14px"} fontWeight={"700"} color={"#FFFFFF"} align={"center"} justifyContent={"center"} ><Image src='ethw.png' />{props.price}</Text>
    </Box>
  )
}

export default Leader
