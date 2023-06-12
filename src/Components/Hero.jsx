import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Input,
  Heading,
  Flex,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { overlay, video } from "../assets/images";
import ReactPlayer from "react-player";
import CustomButton from "./CustomButton";

function Hero() {
  const [value, setValue] = React.useState("");

  React.useEffect(() => localStorage.setItem("address", value), [value]);
  const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

  return (
    <Box
      justifyContent={"center"}
      alignSelf={"center"}
      bg="blackAlpha.900"
      pos={"relative"}
    >
      <SimpleGrid
        columns={[1, 1, 2, 2, 2]}
        spacing={{
          sm: "0",
          base: "0",
          lg: "20%",
          md: "20%",
          "2xl": "20%",
          xl: "20%",
        }}
        overflow={"hidden"}
        h={"70%"}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "100%", "2xl": "100%" }}
        ms={{ base: "0", sm: "0", md: "7%", lg: "6%", "2xl": "6%" }}
        mt={{ sm: "1%", md: "20%", xl: "8%" }}
      >
        <Box
          pos={"relative"}
          mt={{ sm: "30%", base: "20%", md: "10%", lg: "0" }}
          ms={{ base: "0", sm: "0", md: "1%", lg: "0", "2xl": "none" }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            boxShadow="lg"
            alignItems={"center"}
            mt={{
              sm: "0",
              base: "0",
              md: "10%",
              lg: "10%",
              "2xl": "10%",
              xl: "10%",
            }}
          >
            <Heading
              as="h1"
              fontSize={{
                base: "25px",
                md: "30px",
                lg: "50px",
                xl: "60px",
                sm: "25px",
                "2xl": "60px",
              }}
              fontFamily={`CustomFontBold, MatterSQ-SemiBold`}
              noOfLines={1}
              color={"white"}
              filter="grayscale(100%)"
              textShadow="1px 1px gray"
              brightness="90%"
              mt={{ sm: 2, md: 6, lg: 7, xl: 4, "2xl": 3 }}
              textAlign={"center"}
              pos={"relative"}
              display={["none", "none", "flex", "inline-block", "inline-block"]}
            >
              Shop on
            </Heading>

            <Center
              position="relative"
              display={["none", "none", "inline-block"]}
            >
              <Image
                src={video}
                objectFit="contain"
                w={{ xl: "216px", "2xl": "216px" }}
                h={{
                  base: "52px",
                  sm: "50px",
                  md: "40px",
                  lg: "60px",
                  xl: "70px",
                }}
                mt={{ md: 5, lg: 3, xl: 3 }}
              />
              <Heading
                position="absolute"
                bottom="1"
                top={{
                  base: "0",
                  sm: "0",
                  md: "5",
                  lg: "4",
                  "2xl": 3,
                  xl: "3",
                }}
                right={{
                  base: "0",
                  sm: "0",
                  md: "0",
                  lg: "1",
                  xl: "0",
                  "2xl": "0",
                }}
                px="1"
                color="#FFEBB3"
                as="h1"
                textAlign={"center"}
                fontSize={{
                  base: "32px",
                  md: "33px",
                  lg: "50px",
                  xl: "60px",
                  sm: "34px",
                  "2xl": "60px",
                }}
                fontFamily={`CustomFontBold, MatterSQ-SemiBold`}
                noOfLines={1}
                brightness="90%"
                // mt={2}
                left={{ sm: "1", base: "1", md: "1", lg: "1", xl: "1" }}
              >
                video
              </Heading>
            </Center>
          </Box>
          <Heading
            w={"100%"}
            display={["none", "none", "flex"]}
            as="h1"
            noOfLines={1}
            color={"white"}
            fontSize={{
              sm: "28px",
              md: "33px",
              lg: "44px",
              xl: "58px",
              sm: "28px",
            }}
          >
            with Kommerce
          </Heading>
          <Box
            display={["flex", "flex", "none", "none", "none"]}
            justifyContent="center"
            flexDirection={"row"}
            pos={"relative"}
          >
            <Center>
              <Image src="./mobile.svg" objectFit="center" />
            </Center>
          </Box>
          <Box
            mt={5}
            w={{
              md: "100%",
              "2xl": "80%",
              lg: "100%",
              xl: "100%",
              sm: "100%",
            }}
          >
            <Text
              color={"white"}
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "20px",
                "2xl": "20px",
                xl: "20px",
              }}
              px={{ sm: 5, base: 5, md: 0, lg: 0, xl: 0, "2xl": 0 }}
              w={{
                md: 403,
                lg: 533,
                xl: 533,
                "2xl": 933,
              }}
              pos={"relative"}
              fontFamily={`CustomFont, MatterSQ-Regular`}
              textAlign={isSmallerThanMd ? "center" : "flex-start"}
            >
              Get early access to experience an interactive, immersive live
              shopping platform where you experience exclusive deals, and
              real-time interactions with your favourite brands.
            </Text>
          </Box>
          <Box display={["none", "none", "none", "flex"]} mt={8} w={"100%"}>
            <Input
              variant="outline"
              placeholder="Enter your email address"
              bg="#1A1C1F"
              borderColor="#1A1C1F"
              w={"317px"}
              h={"45px"}
              mr={2}
              color="#B4BECB"
              fontSize={"13px"}
              fontFamily={`CustomFont, MatterSQ-Regular`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <CustomButton
              value={value}
              width={"191px"}
              scrollTo="early-access"
            />
          </Box>
        </Box>

        <Box
          backgroundImage="url('./shadow.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize={"380px"}
          pos={"relative"}
          mt={{ sm: "10%", base: "20%", md: "10%", lg: "0" }}
          // order={{ base: 1, sm: 1, md: 2, lg: 2, "2xl": 2 }}
          ms={{ base: "15%", sm: "15%", md: "0", lg: "0", "2xl": "0" }}
        >
          <Flex filter="auto" brightness="90%" pos={"relative"}>
            <Box
              mt={{
                sm: "20%",
                base: "20%",
                md: "60%",
                lg: "70%",
                "2xl": "55%",
                xl: "70%",
              }}
              pos={"absolute"}
              left={{ "2xl": "-11%", lg: "-14%", md: "-20%" }}
              display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
            >
              <Image
                src="./star.svg"
                objectFit={"contain"}
                w={"247.71px"}
                h={"54.71px"}
              />
            </Box>
            <Box
              // order={{ base: 1, sm: 1, md: 2, lg: 2, "2xl": 2 }}
              w={{
                sm: "95%",
                lg: "80%",
                md: "80%",
                xl: "75%",
                base: "75%",
                "2xl": "75%",
              }}
            >
              <ReactPlayer
                // url="https://res.cloudinary.com/duprallvm/video/upload/v1685626517/Screen_Recording_2023-06-01_at_10.53.14_c1wzv9.mov"
                url="https://res.cloudinary.com/duprallvm/video/upload/v1686317785/Screen-Recording-2023-06-01-at-1_r0yzir.mp4"
                playing={true}
                loop={true}
                width="85%"
                // controls
                height="95%"
              />

              <Box
                pos={"absolute"}
                h={{
                  sm: "27%",
                  xl: "330px",
                  base: "18%",
                  md: "285px",
                }}
                w={"88%"}
                top={{
                  base: "8vh",
                  sm: "72%",
                  md: "48%",
                  lg: "52%",
                  "2xl": "70%",
                  xl: "54%",
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
