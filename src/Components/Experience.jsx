import { Box, Image, Center, Text, Heading } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { phoneImage, text } from "../assets/images";

function Experience() {
  return (
    <Box
      pos={"relative"}
      h={{
        base: "12vh",
        md: "13vh",
        lg: "10vh",
        xl: "50vh",
        sm: "12vh",
        "2xl": "40vh",
      }}
      marginTop={{
        sm: "50%",
        base: "100%",
        md: "45%",
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
            <Image src={text} objectFit="contain" w="100%" />
          </Box>
        </Marquee>
        <Marquee direction="right" autoFill={true} speed={2}>
          <Box>
            <Image src={text} objectFit="contain" />
          </Box>
        </Marquee>
        <Marquee autoFill={true}>
          <Box>
            <Image src={text} objectFit="contain" />
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
            base: "20vh",
            lg: "20vh",
            xl: "65vh",
            "2xl": "65vh",
            md: "20vh",
            sm: "20vh",
          }}
          alignItems="center"
          justifyContent="center"
          position="absolute"
          w={{
            base: "90%",
            md: "65%",
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
