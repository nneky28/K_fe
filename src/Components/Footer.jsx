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
    <Box pos={"relative"}>
      <Box pos={"relative"} h={["30vh", "50vh"]}>
        <Center px={[4, 0]}>
          <Heading
            color={"white"}
            fontSize={["22px", "22px"]}
            textAlign={"center"}
          >
            Get ready to redefine your shopping experience.
          </Heading>
        </Center>
        <Center mt={5} position={"relative"}>
          <Text color={"white"} fontSize={["12px", "14px"]} px={4}>
            Join our waitlist now and secure your spot as one of the first to
          </Text>
        </Center>
        <Center position={"relative"}>
          <Text color={"white"} fontSize={["12px", "14px"]} px={4}>
            experience the revolutionary live shopping app when it
          </Text>
        </Center>
        <Center position={"relative"}>
          <Text color={"white"} fontSize={["12px", "14px"]}>
            launches.
          </Text>
        </Center>

        <Center mt={8} position={"relative"} display={["none", "flex"]}>
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
        px={["6%", "10%", "10%", "10%", "10%"]}
        position={["relative", "fixed"]}
        bottom={["0", "0"]}
        zIndex="20"
        mb={["6vh", "0", "0", "0", "0"]}
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
        w="auto"
        display={["flex", "none"]}
        position={"fixed"}
        bottom={"0"}
        zIndex="20"
      >
        <CustomButton
          size="lg"
          // w="100%"
          style={{
            border: "0.1px solid #FA4354",
            width: "250%",
            fontSize: "15px",
            height: "7vh",
            borderRadius: "0px",
          }}
        />
      </Box>
    </Box>
  );
}
