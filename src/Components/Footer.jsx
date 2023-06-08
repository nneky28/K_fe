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
    <Box pos={"relative"} bg="#060809">
      <Box
        pos={"relative"}
        h={{ base: "25vh", md: "30vh", xl: "45vh", sm: "25vh", lg: "40vh" }}
        overflow={"hidden"}
      >
        <Center px={[4, 0]}>
          <Heading
            color={"white"}
            fontSize={{
              base: "22px",
              md: "33px",
              lg: "32px",
              xl: "28px",
              sm: "24px",
            }}
            px={{ lg: 6, xl: 12 }}
            fontFamily={"CustomFont, Matter-regular"}
            textAlign={"center"}
            w={{ base: "100%", sm: "100%", xl: "90%", md: "80%", "2xl": "50%" }}
          >
            Get ready to redefine your shopping experience.
          </Heading>
        </Center>
        <Center mt={5} position={"relative"}>
          <Text
            color={"white"}
            fontSize={{
              base: "13px",
              sm: "14px",
              md: "14px",
              lg: "14.5px",
              xl: "15px",
              "2xl": "17px",
            }}
            py={2}
            px={{ sm: 30, base: 12, lg: 12, xl: 12, md: 6 }}
            textAlign={"center"}
            w={{ base: "60%", sm: "100%", xl: "50%", md: "75%", "2xl": "50%" }}
          >
            Join our waitlist now and secure your spot as one of the first to
            experience the revolutionary live shopping app when it launches.
          </Text>
        </Center>

        <Center
          mt={8}
          position={"relative"}
          display={["none", "none", "flex", "flex"]}
        >
          <CustomButton width={{ md: "20vw", xl: "14vw" }} p={3} />
        </Center>
      </Box>
      <Box
        bg="#1B1C20"
        w="100%"
        p={5}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={["6%", "10%", "10%", "10%", "10%"]}
        position={{
          sm: "relative",
          base: "relative",
          md: "fixed",
          lg: "fixed",
        }}
        bottom={{ sm: "1", base: "2", md: "0", lg: "0" }}
        zIndex="20"
        mb={["5vh", "5vh", "0", "0", "0"]}
      >
        <Flex gap={[3, 8, 8, 8, 8]}>
          <Image src="./insta.png" boxSize={"20px"} />
          <Image src="./twitter.png" boxSize={"20px"} />
          <Image src="./fb.png" boxSize={"20px"} />
        </Flex>
        <Text color="white" fontSize={"12px"}>
          Copyright {today.getFullYear()}
        </Text>
      </Box>

      <Box
        display={{ sm: "flex", base: "flex", md: "none", lg: "none" }}
        position={"fixed"}
        bottom={"0"}
        zIndex="20"
        // overflow="hidden"
        w={"100%"}
      >
        <CustomButton width={"100vw"} p={5} />
      </Box>
    </Box>
  );
}
