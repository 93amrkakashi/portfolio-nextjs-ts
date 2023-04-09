import { roboAnimation } from "@/utils/animations";
import {
  Stack,
  Box,
  Flex,
  Text,
  Heading,
  Icon,
  Image as ImageN,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import roboHero from "../pics/robo-hero.svg";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";




export default function About() {
  return (
    <>
      <Head>
        <title>Amr Kakashi | About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        w="100%"
        minH="100vh"
        bg={useColorModeValue("gray.200", "gray.700")}
        px={10}
        py="55px"
      >
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 18 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={2} spacing={{ base: 5, md: 10 }}>
          <motion.div
            style={{ fontSize: 18 }}
            initial={{ y: "-50vh" }}
            animate={{ y: "0" }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 25, sm: 25, lg: 40 }}
            >
              <Text as={"span"} color={"blue.400"}>
                Let me introduce myself !
              </Text>
              <br />
              <Text as={"span"} color={"blue.400"}>
                My name is {"  "}
              </Text>
              <Text as={"span"} position={"relative"}>
                Amr Ali.
              </Text>
              <br />
              <Text as={"span"} color={"blue.400"}>
                A front end developer, based in Egypt.{"  "}
              </Text>
            </Heading>
            </motion.div>
            <motion.div
            style={{ fontSize: 18 }}
            initial={{ y: "100vh" }}
            animate={{ y: "0" }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            >
            <Text color={"black.400"}>
              The part that might be funny, That in fact I have a bachelor
              degree in social work! <br /> Social work is awesome but I did not
              find my passion there.
              <br />
              There where the development path began. <br /> I started as a
              frontend developer through self-education, <br /> Through online
              courses and bootcamps, in addition to reading in several
              documents.
            </Text>
            </motion.div>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            ></Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={{ base: "90%", md: "90", sm: "50%" }}
          >
            <motion.div
              initial={{ y: "70vh", scale: 0.1, x:"20vw" }}
              animate={{ y: "0", scale: 1 ,x:"0"}}
              transition={{ delay: 0.2, duration: 2, type: "spring" }}
            >
            <ImageN
              as={Image}
              w="250"
              objectFit="cover"
              alt="noooo"
              fit={"cover"}
              align={"center"}
              src={roboHero}
              animation={roboAnimation}
              />
              </motion.div>
          </Flex>
        </Stack>

        <Flex justify="center" gap={"5"} wrap="wrap" align={"center"}>
          {studies.map((study) => (
            <motion.div
            key={study.name}
            initial={{ y: "70vh" }}
              animate={{ y: "0" }}
              transition={{ delay: 0.5, duration: 2, type: "spring" }}
            >
              <Flex
              alignItems="center"
              flexDirection={"column"}
              textAlign="center"
              width={"300px"}
              minHeight="300px"
              border="1px"
              borderRadius={"lg"}
              p="5"
              m="5"
            >
              <Box fontSize="40" color={`${study.col}`}>
                    {study.icon}
                  </Box>
              <Heading as="h3" size="lg" color={study.col}>
                {study.name}
              </Heading>
              <Text>{study.p}</Text>
            </Flex>
              </motion.div>
            
          ))}
        </Flex>
      </Stack>
    </>
  );
}

export const studies = [
  {
    name: "HTML",
    col: "orange.400",
    icon: <Icon as={FaHtml5} />,
    p: "The first thing I started with was HTML. it didnt take much time to learn but diving into the language took some time.",
  },
  {
    col: "blue.400",
    name: "CSS",
    icon: <Icon as={FaCss3Alt} />,
    p: "Then, the CSS, it isn't really that hard. but it's pretty big, in the end you find that what you can do with it is really great.",
  },
  {
    col: "yellow.400",
    name: "JS",
    icon: <Icon as={SiJavascript} />,
    p: "Then, the JavaScript, It may be difficult. Variables, functions, loops and many other things that seem really hard , but in the end it's all worth it",
  },
  {
    col: "blue.400",
    name: "REACT",
    icon: <Icon as={FaReact} />,
    p: `After that comes the framework and some other technologies such as React,
     It is the stage of transition beyond the basic language where there is a new world of development`,
  },
];
