import React, { useState } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function PhoneMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<any>()
  return (
    <>
      <IconButton icon={<HamburgerIcon></HamburgerIcon>} aria-label="menu" ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size='full'
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            123
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PhoneMenu;
