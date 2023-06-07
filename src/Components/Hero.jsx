import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Input,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { overlay, video } from "../assets/images";
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
    <Box justifyContent={"center"} alignSelf={"center"} bg="blackAlpha.900">
      <SimpleGrid
        columns={[1, 1, 2, 2, 2]}
        spacing={{
          sm: "0",
          base: "none",
          lg: "20%",
          md: "20%",
          "2xl": "20%",
          xl: "10%",
        }}
        overflow={"hidden"}
        h={"70%"}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "100%", "2xl": "100%" }}
        p={[2, 6, 6, 10, 10]}
        ms={{ base: "0", sm: "0", md: "7%", lg: "7%", "2xl": "8%" }}
        mt={["1%", "6%"]}
      >
        <Box
          pos={"relative"}
          order={{ base: 2, sm: 2, md: 1, lg: 1, "2xl": 1 }}
          ms={{ base: "1%", sm: "1%", md: "0", lg: "0", "2xl": "none" }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            boxShadow="lg"
            mt={{ sm: "8%", base: "8%", md: "10%", lg: "10%" }}
          >
            <Heading
              as="h1"
              fontSize={{
                base: "40px",
                md: "33px",
                lg: "50px",
                xl: "58px",
                sm: "35px",
              }}
              noOfLines={1}
              color={"white"}
              filter="grayscale(100%)"
              textShadow="1px 1px gray"
              brightness="90%"
              mt={[1, 6, 6, 4, 3]}
              textAlign={"center"}
            >
              Shop on
            </Heading>
            <Box position="relative" display="inline-block">
              <Image
                src={video}
                objectFit="contain"
                w={["158px", "135px", "160px", "175px", "205px"]}
                h={{ base: "60px", sm: "60px", md: "60px", lg: "70px" }}
                mt={3}
              />
              <Heading
                position="absolute"
                bottom="1"
                top={{ base: "none", sm: "6", md: "5", lg: "5" }}
                right={["0", "5"]}
                px="1"
                color="#FFEBB3"
                as="h1"
                textAlign={"center"}
                fontSize={{
                  base: "40px",
                  md: "35px",
                  lg: "46px",
                  xl: "53px",
                  sm: "32px",
                }}
                noOfLines={1}
                brightness="90%"
                // mt={2}
                left={["6", "6", "8", "6", "8"]}
              >
                video
              </Heading>
            </Box>
          </Box>
          <Heading
            as="h1"
            noOfLines={1}
            color={"white"}
            fontSize={{
              base: "40px",
              md: "33px",
              lg: "50px",
              xl: "58px",
              sm: "35px",
            }}
          >
            with Kommerce
          </Heading>
          <Box
            mt={5}
            w={{
              base: "100%",
              sm: "96%",
              md: "100%",
              "2xl": "67%",
              lg: "100%",
              xl: "85%",
            }}
          >
            <Text
              color={"white"}
              fontSize={{
                base: "13px",
                sm: "13px",
                md: "14px",
                lg: "14.5px",
                "2xl": "17px",
                xl: "15.5px",
              }}
              // p={1}
            >
              Get early access to experience an interactive, immersive live
              shopping platform where you experience exclusive deals, and
              real-time interactions with your favourite brands.
            </Text>
          </Box>
          <Box display={["none", "none", "flex"]} mt={8}>
            <Input
              variant="outline"
              placeholder="Enter your email address"
              bg="#1A1C1F"
              borderColor="#1A1C1F"
              w={{
                base: "none",
                sm: "none",
                md: "50%",
                lg: "60%",
                "2xl": "45%",
              }}
              h={10}
              mr={2}
              color="#B4BECB"
              fontSize={"12px"}
              fontFamily={`CustomFontBold, Matter-Bold`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <CustomButton value={value} sm="md" />
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
          mt={{ sm: "20%", base: "20%", md: "10%", lg: "0" }}
          order={{ base: 1, sm: 1, md: 2, lg: 2, "2xl": 2 }}
          ms={{ base: "30%", sm: "25%", md: "0", lg: "0", "2xl": "none" }}
          mb={{ base: "-18%", sm: "-20%" }}
        >
          <Flex filter="auto" brightness="90%" pos={"relative"}>
            <Box
              mt={{
                sm: "20%",
                base: "20%",
                md: "60%",
                lg: "60%",
                "2xl": "46%",
                xl: "70%",
              }}
              pos={"absolute"}
              mr={"20%"}
              left={{ "2xl": "-18%", lg: "-22%", md: "-20%" }}
              display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
            >
              <Image
                src="./star.svg"
                objectFit={"contain"}
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              order={{ base: 1, sm: 1, md: 2, lg: 2, "2xl": 2 }}
              w={{ sm: "70%", lg: "65%", md: "60%", xl: "70%" }}
              // pos={"relative"}
            >
              <ReactPlayer
                url="https://res.cloudinary.com/duprallvm/video/upload/v1685626517/Screen_Recording_2023-06-01_at_10.53.14_c1wzv9.mov"
                playing={true}
                loop={true}
                width="100%"
                height="92%"
              />

              <Box
                pos={"absolute"}
                h={{ sm: "230px", xl: "330px" }}
                w={"88%"}
                top={{
                  base: "25%",
                  sm: "14%",
                  md: "54%",
                  lg: "52%",
                  "2xl": "56%",
                  xl: "58=6%",
                }}
                left={6.1}
                bgGradient="linear(to-t, black 7.81%, black 54.57%,rgba(6, 8, 9, 0)  100%)"
                opacity={1}
              ></Box>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Hero;
