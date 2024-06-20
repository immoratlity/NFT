import { Box, Button, Container, Flex, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import Explore from './Explore'
import { BiArrowToBottom } from "react-icons/bi";

const Explores = () => {
  return (
    <Box h={"180vh"}>
      <Container maxW={"container.xl"}>
        <Flex py={"60px"} paddingTop={"130px"} align={"center"} justify={"space-between"}>
          <Heading>Explore</Heading>
          <Button bg={"transparent"} borderRadius={"15px"} border={"2px solid #333"} color={"#333"} display={"flex"} alignItems={"center"} gap={"5px"} justifyContent={"center"}>Recently Added<BiArrowToBottom fontSize={"20px"} /></Button>
        </Flex>
        <Grid gridTemplateColumns={"repeat(4,1fr)"} alignItems={"center"} justifyContent={"center"} gap={"24px"}>
          <Explore image={"robo.png"} title={"ExBoot #1"} user={"user.png"} userName={"Perperzon"} />
          <Explore image={"robo.png"} title={"ExBoot #2"} user={"user.png"} userName={"Perperzon"} />
          <Explore image={"robo.png"} title={"ExBoot #3"} user={"user.png"} userName={"Perperzon"} />
          <Explore image={"robo.png"} title={"ExBoot #4"} user={"user.png"} userName={"Perperzon"} />
          <Explore image={"robo.png"} title={"ExBoot #5"} user={"user.png"} userName={"Perperzon"} />
          <Explore image={"robo.png"} title={"ExBoot #6"} user={"user.png"} userName={"Perperzon"} />
          <Explore image={"robo.png"} title={"ExBoot #7"} user={"user.png"} userName={"Perperzon"} />
          <Explore image={"robo.png"} title={"ExBoot #8"} user={"user.png"} userName={"Perperzon"} />
          <Explore image={"robo.png"} title={"ExBoot #9"} user={"user.png"} userName={"Perperzon"} />
          <Explore image={"robo.png"} title={"ExBoot #10"} user={"user.png"} userName={"Perperzon"} />
          <Explore image={"robo.png"} title={"ExBoot #11"} user={"user.png"} userName={"Perperzon"} />
          <Explore image={"robo.png"} title={"ExBoot #12"} user={"user.png"} userName={"Perperzon"} />
        </Grid>
        <Box textAlign={"center"} marginTop={"50px"}>
        <Button bg={"transparent"} borderRadius={"15px"} border={"2px solid #333"} color={"#333"}>Discover More</Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Explores
