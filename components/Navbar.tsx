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
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
export function Links() {
  return (
    <>
      <motion.div
        initial={{ scale: 1.5, x: "100vw" }}
        animate={{ scale: 1, x: "0" }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
      >
        <Box as={Link} href={"/"} fontSize="15" fontWeight="bold">
          Home
        </Box>
      </motion.div>

      <motion.div
        initial={{ scale: 1.5, x: "100vw" }}
        animate={{ scale: 1, x: "0" }}
        transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
      >
        <Box as={Link} href={"/About"} fontSize="15" fontWeight="bold">
          About
        </Box>
      </motion.div>

      <motion.div
        initial={{ scale: 1.5, x: "100vw" }}
        animate={{ scale: 1, x: "0" }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
      >
        <Box as={Link} href={"/Skills"} fontSize="15" fontWeight="bold">
          Skills
        </Box>
      </motion.div>

      <motion.div
        initial={{ scale: 1.5, x: "100vw" }}
        animate={{ scale: 1, x: "0" }}
        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
      >
        <Box as={Link} href={"/Projects"} fontSize="15" fontWeight="bold">
          Projects
        </Box>
      </motion.div>
      <motion.div
        initial={{ scale: 1.5, x: "100vw" }}
        animate={{ scale: 1, x: "0" }}
        transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
      >
        <Box as={Link} href={"/Contact"} fontSize="15" fontWeight="bold">
          Contact
        </Box>
      </motion.div>
    </>
  );
}

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      w="100%"
      h="55px"
      bg={useColorModeValue("gray.400", "gray.900")}
      px={4}
      pos="fixed"
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
        <motion.div
          initial={{ scale: 1.5, x: "100vw" }}
          animate={{ scale: 1, x: "0" }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
        >
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
        </motion.div>

        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          <Links />
        </HStack>
        <motion.div
          initial={{ scale: 1.5, x: "100vw" }}
          animate={{ scale: 1, x: "0" }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
        >
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        </motion.div>
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
