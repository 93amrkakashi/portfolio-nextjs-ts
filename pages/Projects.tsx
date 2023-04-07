import React, { useEffect, useState } from "react";
// import Navbar from "../layout/Navbar";
import { Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Repo from "@/components/Repo";
// import Repo from "../layout/Repo";

function Projects() {
  return (
    <>
    <Text
            fontSize={{ sm: "30" }}
            fontWeight="700"
            textAlign="center"
          >
            Some Of My Projects
          </Text>
      {/* <Navbar /> */}
      <Flex
        align="center"
        justify="center"
        wrap="wrap"
        p="8"
        w='100%'
        gap='5'
        bg={useColorModeValue("gray.200", "gray.700")}
      >
        
        <Repo />
      </Flex>
    </>
  );
}

export default Projects;
