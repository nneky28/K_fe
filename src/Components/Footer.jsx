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
    <Box pos="relative" bg="black" overflow="hidden" mt={"5%"}>
      <Flex
        bg="#1B1C20"
        w="100%"
        p={5}
        justifyContent="space-between"
        px={["6%", "10%", "10%", "10%", "10%"]}
        overflow="hidden"
        mt={"32px"}
        mb={["10vh", "10vh", "0", "0", "0"]}
      >
        <Flex gap={[3, 8, 8, 8, 8]}>
          <Image src="./insta.png" boxSize="20px" />
          <Image src="./twitter.png" boxSize="20px" />
        </Flex>
        <Text
          color="white"
          fontSize="13px"
          fontFamily="CustomFont, MatterSQ-Regular"
        >
          Copyright {today.getFullYear()}
        </Text>
      </Flex>

      <Box
        display={{ sm: "flex", base: "flex", md: "none", lg: "none" }}
        position="fixed"
        bottom="0"
        zIndex="20"
        w="100%"
      >
        <CustomButton
          width="100VW"
          p={3}
          mobile
          height={"10vh"}
          scrollTo="early-access"
        />
      </Box>
    </Box>
  );
}
