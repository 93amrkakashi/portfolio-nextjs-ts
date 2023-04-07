import React from "react";
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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

export function Links() {
  return (
    <>
      <Box as={Link} href={"/"} fontSize="15" fontWeight="bold">
        Home
      </Box>
      <Box as={Link} href={"/About"} fontSize="15" fontWeight="bold">
        About
      </Box>
      <Box as={Link} href={"/Skills"} fontSize="15" fontWeight="bold">
        Skills
      </Box>
      {/* <Box as={Link} href={"/Projects"} fontSize="15" fontWeight="bold">
        Projects
      </Box> */}
      <Box as={Link} href={"/Contact"} fontSize="15" fontWeight="bold">
        Contact
      </Box>
    </>
  );
}

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      w="100%"
      bg={useColorModeValue("gray.400", "gray.900")}
      px={4}
      pos="sticky"
      top="0"
      left={"0"}
      zIndex="10000000"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box
          as={Link}
          href={"/"}
          fontFamily="Finger Paint"
          letterSpacing={"1px"}
          fontSize={{ md: "35", sm: "15" }}
          fontWeight="700"
        >
          AM
        </Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          <Links />
        </HStack>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex> 

       {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Links />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Navbar;
