import { Box, Image, Center, Text, Heading } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { phoneImage, text } from "../assets/images";

function Experience() {
  return (
    <Box
      pos={"relative"}
      h={{
        base: "25vh",
        md: "35vh",
        lg: "32vh",
        xl: "70vh",
        sm: "25vh",
        "2xl": "30vh",
      }}
      marginTop={{
        sm: "50%",
        base: "100%",
        md: "30%",
        lg: "30%",
        xl: "20%",
        "2xl": "15%",
      }}
      // w={"100%"}
      bg="#060809"
    >
      <Box zIndex={0} position={"relative"}>
        <Marquee autoFill={true} bg="black">
          <Box>
            <Image src={text} objectFit="contain" />
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
          height={{ base: "40vh", lg: "40vh", xl: "65vh", "2xl": "65vh" }}
          alignItems="center"
          justifyContent="center"
          position="absolute"
          w={{
            base: "90%",
            md: "60%",
            xl: "30%",
            lg: "40%",
            "2xl": "35vh",
            sm: "75%",
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
