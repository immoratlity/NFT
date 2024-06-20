import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Collection from './Collection'

const Collections = () => {
  return (
    <Box h={"70vh"} pos={"relative"} >
      <Container maxW={"container.xl"}>
        <Heading textAlign={"center"} paddingBottom={"70px"} fontSize={"40px"}>Featured Collections</Heading>
        <Box>
          <Flex align={"center"} justify={"space-between"} gap={"54px"} >
            <Collection image={"robo2.png"} user={"user.png"} userName={"Perperzon"} title={"ExBoot #1"} />
            <Collection image={"robo.png"} user={"user.png"} userName={"Perperzon"} title={"ExBoot #2"} />
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Collections
