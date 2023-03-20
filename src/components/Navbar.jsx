import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack, Icon, IconButton, Link, Stack, Text, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { GiTechnoHeart } from 'react-icons/gi';

const links = [
    { linkName: 'Product', path: '/products' },
    { linkName: 'ShoppingCart', path: '/cart' },
]

const NavLink = ({ path, children }) => (
    <Link
        as={ReactLink}
        to={path}
        px={2}
        py={2}
        rounded='md'
        _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}>
        {children}
    </Link>
);

const Navbar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
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
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        {links.map((link) => (
                            <NavLink key={link.linkName} path={link.path}>
                                {link.linkName}
                            </NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <NavLink>
                        <Icon as={colorMode === 'light' ? MoonIcon : SunIcon}
                            alignSelf='center'
                            onClick={() => toggleColorMode()} />
                    </NavLink>
                    <Button as={ReactLink}
                        to='/signin'
                        p={2} fontSize={'sm'}
                        fontWeight={400}
                    >Sign In</Button>
                    <Button as={ReactLink}
                        to='/signup'
                        m={2}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        _hover={{ bg: 'orange.400' }} bg='orange.500' color={'white'}
                    >Sign Up</Button>
                </Flex>
            </Flex>
            {isOpen ? <Box
                display={{ md: 'none' }}
                pb={4}>
                <Stack as={'nav'} spacing={4}>
                    {links.map((link) => (
                        <NavLink key={link.linkName} path={link.path}>
                            {link.linkName}
                        </NavLink>
                    ))}
                    <NavLink key='signup' path='/signup'>Signup</NavLink>
                </Stack>
            </Box> : null}
        </Box>
    )
}

export default Navbar