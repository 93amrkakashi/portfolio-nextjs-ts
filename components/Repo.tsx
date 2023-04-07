import { repos } from "@/utils/assits";
import {
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCode, FaEye } from "react-icons/fa";




function Repo() {

  return (
    <>
      {repos?.map((repo) => {
        return (
          <Flex
            key={repo.id}
            border="1px"
            borderRadius="lg"
            align="center"
            justify="space-around"
            flexDir="column"
            maxW="360px"
            minH="370px"
            px="2"
            m='3'
            textAlign={"center"}
            boxShadow="xl"
          >
            <Text fontSize="25px" fontWeight="500">
              {repo.name}
            </Text>
            <Text>{repo.description}</Text>
            <Flex w="100%" px="10" align="center" justify="space-around">
              <Link href={repo.demo} target="_blank">
                <Icon as={FaEye} fontSize="35" />
              </Link>
              <Link href={repo.url} target="_blank">
                <Icon as={FaCode} fontSize="35" />
              </Link>
            </Flex>
          </Flex>
        );
      })}
    </>
  );
}

export default Repo;




// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://api.github.com/users/93amrkakashi/repos')
//   const repos = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       repos,
//     },
//   }
// }