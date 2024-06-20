import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Flex align={"center"} gap={1}>
      <Image src='/logo1.png' />
      <Image src='/logo2.png' />
      <Image src='/logo3.png' />
    </Flex>
  )
}

export default Logo
