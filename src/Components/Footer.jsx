import {
  Box,
  Flex,
  Image,
  Text,
  Center,
  Heading,
  Button,
} from "@chakra-ui/react";
import React from "react";
import CustomButton from "./CustomButton";

export default function Footer() {
  const today = new Date();
  return (
    <Box>
      <Box
        pos={"relative"}
        // bgGradient="linear(to-t, #060809 0%,#060809)"
        h={["40vh", "50vh"]}
      >
        <Center px={[4, 0]}>
          <Heading
            color={"white"}
            fontSize={["16px", "22px"]}
            textAlign={"center"}
          >
            Get ready to redefine your shopping experience.
          </Heading>
        </Center>
        <Center mt={5} position={"relative"}>
          <Text color={"white"} fontSize={"14px"} px={4}>
            Join our waitlist now and secure your spot as one of the first to
          </Text>
        </Center>
        <Center position={"relative"}>
          <Text color={"white"} fontSize={"14px"} px={4}>
            experience the revolutionary live shopping app when it
          </Text>
        </Center>
        <Center position={"relative"}>
          <Text color={"white"} fontSize={"14px"}>
            launches.
          </Text>
        </Center>

        <Center mt={8} position={"relative"}>
          <CustomButton />
        </Center>
      </Box>
      <Box
        bg="#1B1C20"
        w="100%"
        p={4}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={["6%", "10%"]}
        position="fixed"
        bottom="0"
        zIndex="20"
      >
        <Flex gap={[3, 8]}>
          <Image src="./insta.png" boxSize={"20px"} />
          <Image src="./twitter.png" boxSize={"20px"} />
          <Image src="./fb.png" boxSize={"20px"} />
        </Flex>
        <Text color="white" fontSize={"12px"}>
          Copyright {today.getFullYear()}
        </Text>
      </Box>
    </Box>
  );
}
