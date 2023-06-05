import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Input,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { video } from "../assets/images";
import ReactPlayer from "react-player";
import CustomButton from "./CustomButton";

function Hero() {
  const [value, setValue] = React.useState("");

  React.useEffect(() => localStorage.setItem("address", value), [value]);

  const divStyles = {
    filter: "drop-shadow(2px 3px 10px crimson)",
    height: "20%",
  };
  return (
    <>
      <SimpleGrid
        columns={[1, null, 2]}
        spacing={"5%"}
        p={5}
        px={[4, 20]}
        w={"100%"}
        overflow={"hidden"}
        h={"100vh"}
        // bg=" #060809"
      >
        <Box
          mt={["1%", "35%"]}
          ms={["6%", "8%", "8%", "8%", "8%"]}
          pos={"relative"}
          order={[2, 1]}
          // top={-8}
        >
          <Box display={"flex"} flexDirection={"row"} boxShadow="lg">
            <Heading
              as="h1"
              fontSize={["40px", "48px"]}
              noOfLines={1}
              color={"white"}
              filter="grayscale(100%)"
              textShadow="1px 1px gray"
              brightness="90%"
              mt={[3]}
            >
              Shop on
            </Heading>
            <Box position="relative" display="inline-block">
              <Image
                src={video}
                objectFit="contain"
                w={["158px", "170px", "175px", "175px", "175px"]}
                h="60px"
                mt={2}
              />
              <Heading
                position="absolute"
                bottom="1"
                right={["0", "5"]}
                px="1"
                color="#FFEBB3"
                as="h1"
                fontSize={["41px", "48px"]}
                noOfLines={1}
                brightness="90%"
                mt={2}
                left={["6", "6"]}
              >
                video
              </Heading>
            </Box>
          </Box>
          <Heading
            as="h1"
            noOfLines={1}
            color={"white"}
            fontSize={["42px", "48px"]}
          >
            with Kommerce
          </Heading>
          <Box mt={5} w={["100%", "77%"]}>
            <Text color={"white"} fontSize={"14px"}>
              Join the waitlist for an interactive, immersive live shopping
              platform where you experience exclusive deals, and real-time
              interactions with your favourite brands.
            </Text>
          </Box>
          <Box display={["none", "flex"]} mt={8}>
            <Input
              variant="outline"
              placeholder="Enter your email address"
              bg="#1A1C1F"
              borderColor="#1A1C1F"
              w={"48.5%"}
              h={8}
              mr={2}
              color="#B4BECB"
              fontSize={"13px"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <CustomButton value={value} size="sm" />
          </Box>
        </Box>

        <Box
          backgroundImage="url('./shadow.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize={"cover"}
          justifyContent={"center"}
          alignItems={"center"}
          pos={"relative"}
          order={[1, 2]}
          mt={[8, 0]}
        >
          <Flex filter="auto" brightness="90%" ms={"20%"} pos={"relative"}>
            <Box
              mt={"109%"}
              pos={"absolute"}
              mr={"20%"}
              left={"-22%"}
              display={["none", "flex"]}
            >
              <Image
                src="./star.svg"
                objectFit={"contain"}
                style={{ width: "100%" }}
              />
            </Box>
            <Box>
              <ReactPlayer
                url="https://res.cloudinary.com/duprallvm/video/upload/v1685626517/Screen_Recording_2023-06-01_at_10.53.14_c1wzv9.mov"
                playing={true}
                loop={true}
                width="80%"
                height="120%"
              />
            </Box>
            <div
              style={{
                position: "absolute",
                top: "80%", // Adjust the position to cover from the center upwards
                left: 0,
                width: "100%",
                height: "30%",
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the opacity as desired
                zIndex: 2,
              }}
            ></div>
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default Hero;
