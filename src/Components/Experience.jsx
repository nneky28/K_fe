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
    <Box
      pos={"relative"}
      h={{
        base: "50vh",
        md: "90vh",
        lg: "100vh",
        xl: "50vh",
        sm: "70vh",
        "2xl": "40vh",
      }}
      marginTop={{
        sm: "40%",
        base: "100%",
        md: "25%",
        lg: "50%",
        xl: "20%",
        "2xl": "15%",
      }}
      // w={"100%"}
      bg="#060809"
    >
      <Box zIndex={0} position={"relative"}>
        <Marquee autoFill={true} bg="black">
          <Box>
            <Image src={text} objectFit="contain" w="100%" maxW="100%" />
          </Box>
        </Marquee>
        <Marquee direction="right" autoFill={true} speed={2}>
          <Box>
            <Image src={text} objectFit="contain" maxW="100%" />
          </Box>
        </Marquee>
        <Marquee autoFill={true}>
          <Box>
            <Image src={text} objectFit="contain" maxW="100%" />
          </Box>
        </Marquee>
      </Box>
      <Center>
        <Box
          bgImage="url('./phone.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize={"215px 270px"}
          height={{
            base: "100vh",
            lg: "130vh",
            xl: "65vh",
            "2xl": "65vh",
            md: "130vh",
            sm: "100vh",
          }}
          alignItems="center"
          justifyContent="center"
          position="absolute"
          w={{
            base: "90%",
            md: "35%",
            xl: "25%",
            lg: "35%",
            "2xl": "30%",
            sm: "80%",
          }}
        >
          <Center>
            <Image src={phoneImage} objectFit="cover" />
          </Center>
        </Box>
      </Center>
    </Box>
  );
}

export default Experience;
