import React from 'react'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
function Footer() {
  return (
    <Box
      w="100%"
      bg={useColorModeValue("gray.400", "gray.900")}
      px={4}
      pos="sticky"
      bottom="0"
      left={"0"}
      zIndex="10000000"
      textAlign="center"
    >
      all rights reserved
      
    </Box>
  )
}

export default Footer