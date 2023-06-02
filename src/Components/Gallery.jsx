import {
  Box,
  Center,
  Icon,
  Heading,
  Text,
  Flex,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";

function Gallery() {
  const overlay = {
    objectFit: "cover",
    opacity: 2.4,
  };
  const headerStyle = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 10), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url('./gallery.png')",
    overflow: "hidden",
    opacity: 2.4,
  };

  return (
    <Box bgGradient="linear(to-tl, #060809 0%,  rgba(6, 8, 9, 0.6),#060809)">
      <Center>
        <Image
          src="./discover.png"
          style={{
            objectFit: "contain",
            width: "30vw",
            marginTop: "10%",
            marginBottom: "1%",
          }}
        />
      </Center>
      <Center p={[5, 0]}>
        <Box w={["100%", "30%"]}>
          <Text color={"white"} fontSize={["12px", "14px"]}>
            Discover a secure and delightful shopping experience with live
            video, while enjoying exclusive discounts on everything
          </Text>
        </Box>
      </Center>
      <Center>
        <Text color={"white"} fontSize={"14px"}>
          you love.
        </Text>
      </Center>

      <Center mt={"3%"} p={4} px={9}>
        <Box
          bgImage="url('/gallery.png')"
          backgroundRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          height={["14vh", "65vh"]}
          position="relative"
          bottom={14}
          w={["100%", "100%"]}
          borderRadius="40%"
          zIndex={0}
          mt={"5%"}
          style={headerStyle}
        ></Box>

        <Center>
          <ReactPlayer
            url="https://res.cloudinary.com/duprallvm/video/upload/v1685626774/Screen_Recording_2023-06-01_at_14.37.24_epfydv.mov"
            playing
            width={"20%"}
            height="90%"
            style={{ position: "absolute", left: "40%" }}
          />
        </Center>
      </Center>
    </Box>
  );
}

export default Gallery;
