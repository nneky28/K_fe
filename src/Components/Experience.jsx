import { Box, Image, Center, Text, Heading } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

function Experience() {
  return (
    <Box p={4} h={["45vh", "60vh"]} marginTop={["30%", "18%"]}>
      <Box zIndex={0} position={"relative"}>
        <Marquee>
          <Box>
            <Image src="./text.svg" objectFit="contain" />
          </Box>
        </Marquee>
        <Marquee direction="right">
          <Box>
            <Image src="./text.svg" objectFit="contain" />
          </Box>
        </Marquee>
        <Marquee>
          <Box>
            <Image src="./text.svg" objectFit="contain" />
          </Box>
        </Marquee>
      </Box>
      <Center>
        <Box
          bgImage="url('./phone.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize={"215px 270px"}
          height={["60vh", "65vh"]}
          alignItems="center"
          justifyContent="center"
          position="absolute"
          w={["100%", "27.5%"]}
          // bg="#060809"
        >
          <Center>
            <Image src="./phone.png" objectFit="cover" />
          </Center>
        </Box>
      </Center>
    </Box>
  );
}

export default Experience;
