import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import React, { useEffect, useState } from 'react';
function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  useEffect(()=>{
    if(colorMode === 'dark'){
      document.documentElement.classList.add('dark');      
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[colorMode])

  return (
    <Button onClick={toggleColorMode} mr={3}>
      {colorMode === 'light' ?  '🌙':'💡' }
    </Button>
  );
}

export default DarkMode;
