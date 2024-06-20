import { Box, Container, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Box>
            <Container maxW={"container.xl"}>
                <Flex justify={"space-between"} align={"center"} h={"10vh"}>
                    <Logo />

                    <Input placeholder='Search' w={"284px"}  />

                    <Flex gap={6}>
                        <Link to={'/'}>Explore</Link>
                        <Link to={'/trending'}>Trending🔥</Link>
                        <Link to={'/faq'}>FAQ</Link>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header
