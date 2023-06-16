import {
  Box,
  Image,
  Center,
  Text,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { feMobile, phoneImage, text } from "../assets/images";
import CustomButton from "./CustomButton";

function Experience() {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

  return (
    <Box pos="relative" mt={isSmallerThanMd ? "50%" : "20%"} bg="#060809">
      <Box overflow="hidden">
        <Box zIndex={0} position="relative" bg="#060809">
          <Marquee autoFill={true} bg="black">
            <Box>
              <Image src={text} objectFit="contain" maxW="100%" speed={1} />
            </Box>
          </Marquee>
          <Marquee direction="right" autoFill={true} speed={5}>
            <Box>
              <Image src={text} objectFit="contain" maxW="100%" />
            </Box>
          </Marquee>
          <Marquee autoFill={true}>
            <Box>
              <Image src={text} objectFit="contain" speed={1} />
            </Box>
          </Marquee>
        </Box>
        <Center>
          <Box
            backgroundImage={`url(${feMobile})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={isSmallerThanMd ? "70% 100%" : "contain"}
            height={{
              base: "40%",
              md: "80%",
              xl: "40%",
              "2xl": "20%",
              lg: "40%",
              // sm: "80%",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            w={{
              base: "60%",
              md: "35%",
              xl: "25%",
              "2xl": "25%",
              sm: "82%",
              lg: "30%",
            }}
          >
            <Center w="100%" h="100%">
              <Image src={phoneImage} objectFit="contain" />
            </Center>
          </Box>
        </Center>

        <Box overflow="hidden" mt={"5%"}>
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
              w={{
                base: "100%",
                sm: "100%",
                xl: "90%",
                md: "80%",
                "2xl": "50%",
              }}
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
              w={{
                base: "100%",
                sm: "100%",
                xl: "50%",
                md: "75%",
                "2xl": "50%",
              }}
            >
              Join our waitlist now and secure your spot as one of the first to
              experience the revolutionary live shopping app when it launches.
            </Text>
          </Center>

          <Center
            mb={10}
            position="relative"
            display={["none", "none", "flex", "flex"]}
          >
            <CustomButton
              width={{ md: "20vw", xl: "14vw" }}
              p={3}
              scrollTo="early-access"
            />
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
