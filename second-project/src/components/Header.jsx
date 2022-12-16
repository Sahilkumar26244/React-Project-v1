import React from 'react';
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, Stack, VStack, HStack} from "@chakra-ui/react"
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from 'react-router-dom';


function Header() {

    const {isOpen,onOpen,onClose} = useDisclosure()

  return <>
    <Button pos={'fixed'} top={'4'} left={'4'} colorScheme={'blue'} p={'0'} w={'10'} h={'10'} borderRadius={"full"} onClick={onOpen} >
        <BiMenuAltLeft size={'20'} />
    </Button>
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>VIDEO HUB</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'} >
                    <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"} >
                        <Link to='/' >Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"} >
                        <Link to='/videos' >Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"} >
                        <Link to='/videos?category=free' >Free Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"} >
                        <Link to='/upload' >Upload Video</Link>
                    </Button>
                </VStack>
                <HStack pos={'absolute'} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"} >
                    <Button onClick={onClose} colorScheme={'blue'} >
                        <Link to='/login' >Login</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={'blue'} variant={'outline'} >
                        <Link to='/signup' >Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
  </>
}

export default Header