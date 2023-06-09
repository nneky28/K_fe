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
      <Box overflow="hidden">
        <Center px={[4, 0]} pos="relative">
          <Heading
            color="white"
            fontSize={{
              base: "24px",
              md: "28px",
              lg: "28px",
              xl: "28px",
              sm: "24px",
            }}
            px={{ lg: 6, xl: 12, sm: 12 }}
            fontFamily="CustomFontMedium, MatterSQ-Medium"
            textAlign="center"
            w={{ base: "100%", sm: "100%", xl: "90%", md: "80%", "2xl": "50%" }}
          >
            Get ready to redefine your shopping experience.
          </Heading>
        </Center>
        <Center mt={"16px"} position="relative" mb={5}>
          <Text
            color="white"
            fontSize={{
              base: "15px",
              sm: "15px",
              md: "14px",
              lg: "15px",
              xl: "14px",
              "2xl": "16px",
            }}
            fontFamily="CustomFont, MatterSQ-Regular"
            py={2}
            px={{ sm: 30, base: 12, lg: 12, xl: 12, md: 6 }}
            textAlign="center"
            w={{ base: "100%", sm: "100%", xl: "50%", md: "75%", "2xl": "50%" }}
          >
            Join our waitlist now and secure your spot as one of the first to
            experience the revolutionary live shopping app when it launches.
          </Text>
        </Center>

        <Center
          // mt={8}
          mb={10}
          position="relative"
          display={["none", "none", "flex", "flex"]}
        >
          <CustomButton width={{ md: "20vw", xl: "14vw" }} p={3} />
        </Center>
      </Box>
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
        <CustomButton width="100VW" p={3} mobile height={"10vh"} />
      </Box>
    </Box>
  );
}
