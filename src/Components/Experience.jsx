import {
  Box,
  Image,
  Center,
  Text,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { phoneImage, text } from "../assets/images";

function Experience() {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

  return (
    <Box pos="relative" bg="#060809" mt={isSmallerThanMd ? "50%" : "20%"}>
      <Box overflow="hidden">
        <Box zIndex={0} position="relative">
          <Marquee autoFill={true} bg="black">
            <Box>
              <Image src={text} objectFit="contain" maxW="100%" speed={2} />
            </Box>
          </Marquee>
          <Marquee direction="right" autoFill={true} speed={2}>
            <Box>
              <Image src={text} objectFit="contain" maxW="100%" />
            </Box>
          </Marquee>
          <Marquee autoFill={true}>
            <Box>
              <Image src={text} objectFit="contain" speed={2} />
            </Box>
          </Marquee>
        </Box>
        <Center>
          <Box
            bgImage="url('./phone.png')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={isSmallerThanMd ? "70% 100%" : "contain"}
            height={{
              base: "40%",
              md: "80%",
              xl: "40%",
              "2xl": "30%",
              lg: "40%",
              // sm: "80%",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            w={{
              base: "60%",
              md: "35%",
              xl: "25%",
              "2xl": "30%",
              sm: "82%",
              lg: "30%",
            }}
          >
            <Center w="100%" h="100%">
              <Image src={phoneImage} objectFit="contain" />
            </Center>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}

export default Experience;
