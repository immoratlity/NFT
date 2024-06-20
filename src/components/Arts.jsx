import { Box, Container, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Art from './Art'

const Arts = () => {
  
  return (
    <Box h={"80vh"} paddingTop={"100px"}>
      <Container maxW={"container.xl"}>
        <Flex align={"center"} justify={"space-between"} paddingBottom={"50px"}>
          <Heading>Trending Art 🔥</Heading>
          <Text fontWeight={"700"}>Discover more</Text>
        </Flex>

        <Grid gap={"24px"} gridTemplateColumns={"repeat(4,1fr)"} align={"center"} justify={"space-between"}>
          <Art image={"robo.png"} title={"ExBoot #1"} user={"user.png"} userName={"Perperzon"} />
          <Art image={"robo2.png"} title={"ExBoot #1"} user={"user.png"} userName={"Richard"} />
          <Art image={"robo3.png"} title={"ExBoot #1"} user={"user.png"} userName={"Perperzon"} />
          <Art image={"robo4.png"} title={"ExBoot #1"} user={"user.png"} userName={"Richard"} />
        </Grid>
      </Container>
    </Box>
  )
}

export default Arts
