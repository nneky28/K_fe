import {
  Box,
  Center,
  Icon,
  Heading,
  Text,
  Flex,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
// import React from "react";
import ReactPlayer from "react-player";
import Marquee from "react-fast-marquee";
import React, { useEffect, useState } from "react";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  eight,
  seven,
  nine,
  ten,
  eleven,
  twelve,
  discover,
} from "../assets/images";

function Gallery() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    setVideoPlaying(true);
  }, []);
  const images = [
    { id: 1, img: one },
    { id: 2, img: two },
    { id: 3, img: three },
    { id: 4, img: four },
    { id: 5, img: five },
    { id: 6, img: six },
    { id: 7, img: seven },
    { id: 8, img: eight },
  ];

  const images1 = [
    { id: 11, img: nine },
    { id: 12, img: ten },
    { id: 13, img: eleven },
    { id: 14, img: twelve },
    { id: 15, img: "./people/15.png" },
    { id: 16, img: "./people/16.png" },
    { id: 17, img: "./people/17.png" },
    { id: 18, img: "./people/18.png" },
    { id: 19, img: "./people/19.png" },
  ];

  const images2 = [
    { id: 22, img: "./people/22.png" },
    { id: 23, img: "./people/23.png" },
    { id: 24, img: "./people/24.png" },
    { id: 25, img: "./people/25.png" },
    { id: 26, img: "./people/26.png" },
    { id: 27, img: "./people/27.png" },
    { id: 28, img: "./people/28.png" },
    { id: 29, img: "./people/29.png" },
    { id: 30, img: "./people/30.png" },
  ];

  const gradientColor = [0, 0.4, 0.5];
  const gradientWidth = 200;

  const rgbaGradientColor = `rgba(${gradientColor.join(", ")})`;

  return (
    <Box w={"100%"}>
      <Center mt={{ md: "5%", "2xl": "0", xl: "0" }}>
        <Image
          src={discover}
          style={{
            objectFit: "contain",

            marginBottom: "1%",
          }}
          w={{ base: "60%", sm: "55%", md: "53%", lg: "34%", "2xl": "28%" }}
        />
      </Center>
      <Center>
        <Center
          mt={3}
          w={{ base: "90%", md: "60%", lg: "35%", "2xl": "29%", sm: "100%" }}
        >
          <Text
            color={"white"}
            px={{ base: 10, sm: 5, md: 2, lg: 0, "2xl": 2 }}
            textAlign={"center"}
            fontSize={{
              base: "12px",
              sm: "12px",
              md: "18px",
              lg: "18px",
              "2xl": "20px",
              xl: "18px",
            }}
            w={{ sm: 317, base: 317, md: 500, xl: 500, "2xl": 500 }}
            fontFamily={`CustomFont, MatterSQ-Regular`}
          >
            Discover a secure and delightful shopping experience with live
            video, while enjoying exclusive discounts on everything you love.
          </Text>
        </Center>
      </Center>

      <Box
        mt={{ base: "15%", sm: "40px", md: "5%", lg: "3%", "2xl": "3%" }}
        pos={"relative"}
      >
        <Box boxShadow="dark-lg" p={["0", "10"]} rounded="full" bg="black">
          <Flex gap={3} zIndex={0} position={"relative"}>
            <Center mt={4} ms={["0", "7%"]} w={["100%", "100%", "85%%", "85%"]}>
              <Marquee
                autoFill={true}
                gradient={true}
                gradientWidth={100}
                gradientColor={[0, 0, 0.9]}
                speed={8}
              >
                {images.map((item, index) => (
                  <Box key={index}>
                    <Image
                      src={item.img}
                      boxSize={"120px"}
                      objectFit={"contain"}
                      style={{ marginRight: "10%" }}
                    />
                  </Box>
                ))}
              </Marquee>
            </Center>
          </Flex>

          <Flex zIndex={0} gap={3} position={"relative"}>
            <Center w={["100%", "100%", "85%%", "95%"]} ms={["0", "4%"]}>
              <Marquee
                autoFill={true}
                gradient={true}
                gradientWidth={100}
                gradientColor={[0, 0, 0.9]}
                direction="right"
                speed={9}
              >
                {images1.map((item, index) => (
                  <Box key={index}>
                    <Image
                      src={item.img}
                      boxSize={"120px"}
                      objectFit={"contain"}
                      style={{ marginRight: "10%", marginTop: "20px" }}
                    />
                  </Box>
                ))}
              </Marquee>
            </Center>
          </Flex>
          <Flex gap={3} zIndex={0} position={"relative"}>
            <Center w={["100%", "100%", "85%%", "85%"]} ms={["0", "7%"]} mb={4}>
              <Marquee
                gradient={true}
                gradientWidth={100}
                gradientColor={[0, 0, 0]}
                autoFill={true}
                speed={9}
              >
                {images2.map((item, index) => (
                  <Box key={index}>
                    <Image
                      src={item.img}
                      boxSize={"120px"}
                      objectFit={"contain"}
                      style={{ marginRight: "10%", marginTop: "20px" }}
                    />
                  </Box>
                ))}
              </Marquee>
            </Center>
          </Flex>
        </Box>

        <ReactPlayer
          url="https://res.cloudinary.com/duprallvm/video/upload/v1686317856/Screen-Recording-2023-06-01-at-1_1_zvydcx.mp4"
          playing={true}
          onReady={() => {
            setVideoPlaying(true);
          }}
          loop={true}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 1 }}
        />
      </Box>
    </Box>
  );
}

export default Gallery;
