import { Box, Container, Flex, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import Leader from './Leader'

const Leaders = () => {
  return (
    <Box bg={"#191919"} h={"60vh"}>
      <Container>
        <Heading color={"#FFFFFF"} fontSize={"40px"} py={"90px"}>Leaderboard of the Week</Heading>
        <Grid gridTemplateColumns={"repeat(5,1fr)"} gap={"80px"} justifyContent={"center"}>
          <Leader number={"#1"} user={"ava.png"} userName={"Perperzon"} price={"9.421"} />
          <Leader number={"#2"} user={"ava.png"} userName={"Richard"} price={"8.421"} />
          <Leader number={"#3"} user={"ava.png"} userName={"Anderson"} price={"7.421"} />
          <Leader number={"#4"} user={"ava.png"} userName={"Michael"} price={"5.421"} />
          <Leader number={"#5"} user={"ava.png"} userName={"Antonson"} price={"3.421"} />
        </Grid>
      </Container>
    </Box>
  )
}

export default Leaders
