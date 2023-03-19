import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack, Icon, IconButton, Link, Stack, Text, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { GiTechnoHeart } from 'react-icons/gi';

const Navbar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems='center' justifyContent={'space-between'}>
                <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
                <HStack>
                    <Link as={ReactLink} to='/'>
                        <Flex alignItems={'center'}>
                            <Icon as={GiTechnoHeart} h={6} w={6} color={'orange.400'} />
                            <Text fontWeight={'extrabold'}>Tech Lines</Text>
                        </Flex>
                    </Link>
                </HStack>
            </Flex>

        </Box>
    )
}

export default Navbar