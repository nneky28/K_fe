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
import React from "react";
import ReactPlayer from "react-player";
import Marquee from "react-fast-marquee";

function Gallery() {
  const images = [
    { id: 1, img: "./people/1.png" },
    { id: 2, img: "./people/2.png" },
    { id: 3, img: "./people/3.png" },
    { id: 4, img: "./people/4.png" },
    { id: 5, img: "./people/5.png" },
    { id: 6, img: "./people/6.png" },
    { id: 7, img: "./people/7.png" },
    { id: 8, img: "./people/8.png" },
    { id: 9, img: "./people/9.png" },
  ];

  const images1 = [
    { id: 11, img: "./people/11.png" },
    { id: 12, img: "./people/12.png" },
    { id: 13, img: "./people/13.png" },
    { id: 14, img: "./people/14.png" },
    { id: 15, img: "./people/15.png" },
    { id: 16, img: "./people/16.png" },
    { id: 17, img: "./people/17.png" },
    { id: 18, img: "./people/18.png" },
    { id: 19, img: "./people/19.png" },
    { id: 20, img: "./people/20.png" },
    { id: 21, img: "./people/21.png" },
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
    { id: 31, img: "./people/31.png" },
    { id: 32, img: "./people/32.png" },
  ];

  const gradientColor = [0, 0.4, 0.5];
  const gradientWidth = 200;

  const rgbaGradientColor = `rgba(${gradientColor.join(", ")})`;

  return (
    <Box w={"100%"}>
      <Center mt={16}>
        <Image
          src="./discover.png"
          style={{
            objectFit: "contain",

            marginBottom: "1%",
          }}
          w={{ base: "60%", sm: "50%", md: "53%", lg: "31%", "2xl": "28%" }}
        />
      </Center>
      <Center>
        <Center w={{ base: "90%", md: "60%", lg: "32%", "2xl": "29%" }}>
          <Text
            color={"white"}
            px={{ base: 10, sm: 10, md: 2, lg: 0, "2xl": 2 }}
            textAlign={"center"}
            fontSize={{
              base: "12px",
              sm: "10px",
              md: "14.4px",
              lg: "15px",
              "2xl": "20px",
            }}
          >
            Discover a secure and delightful shopping experience with live
            video, while enjoying exclusive discounts on everything you love.
          </Text>
        </Center>
      </Center>

      <Box
        mt={{ base: "15%", sm: "5%", md: "5%", lg: "7%", "2xl": "7%" }}
        pos={"relative"}
      >
        <Box boxShadow="dark-lg" p={["0", "10"]} rounded="full" bg="black">
          <Flex gap={3} zIndex={0} position={"relative"}>
            <Center w={["100%", "100%", "md%", "85%"]} ms={["0", "7%"]} mt={4}>
              <Marquee
                autoFill={true}
                gradient={true}
                gradientWidth={200}
                gradientColor={[0, 0, 0.9]}
                speed={8}
              >
                {images.map((item, index) => (
                  <Box key={index}>
                    <Image
                      src={item.img}
                      boxSize={"100px"}
                      objectFit={"contain"}
                      style={{ marginRight: "10%" }}
                    />
                  </Box>
                ))}
              </Marquee>
            </Center>
          </Flex>

          <Flex zIndex={0} gap={3} position={"relative"}>
            <Center>
              <Marquee
                autoFill={true}
                gradient={true}
                gradientWidth={200}
                gradientColor={[0, 0, 0.9]}
                direction="right"
                speed={9}
              >
                {images1.map((item, index) => (
                  <Box key={index}>
                    <Image
                      src={item.img}
                      boxSize={"100px"}
                      objectFit={"contain"}
                      style={{ marginRight: "10%", marginTop: "20px" }}
                    />
                  </Box>
                ))}
              </Marquee>
            </Center>
          </Flex>
          <Flex gap={3} zIndex={0} position={"relative"}>
            <Center w={["100%", "100%", "md%", "85%"]} ms={["0", "7%"]} mb={4}>
              <Marquee
                gradient={true}
                gradientWidth={200}
                gradientColor={[0, 0, 0.9]}
                autoFill={true}
                speed={9}
              >
                {images2.map((item, index) => (
                  <Box key={index}>
                    <Image
                      src={item.img}
                      boxSize={"100px"}
                      objectFit={"contain"}
                      style={{ marginRight: "10%", marginTop: "20px" }}
                    />
                  </Box>
                ))}
              </Marquee>
            </Center>
          </Flex>
        </Box>

        <Center>
          <ReactPlayer
            url="https://res.cloudinary.com/duprallvm/video/upload/v1685626774/Screen_Recording_2023-06-01_at_14.37.24_epfydv.mov"
            playing={true}
            loop={true}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 1 }}
          />
        </Center>

        {/* <Box pos={"absolute"} top={0}>
          <Image src="./people/bgG.png" />
        </Box> */}
      </Box>
    </Box>
  );
}

export default Gallery;
