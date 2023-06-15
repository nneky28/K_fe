import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Button,
  Stack,
  Text,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { family, girls, woman } from "../assets/images";
import CustomButton from "./CustomButton";
// Flex
function Shop() {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

  return (
    <Center pos={"relative"} mt={"5%"}>
      <SimpleGrid
        columns={[1, 1, 2, 2, 2]}
        spacing={{ base: 0, sm: 0, lg: 10, md: 5, "2xl": 12 }}
        ms={["0%", "2.5%"]}
        px={[0, "4%"]}
      >
        {/*  */}
        <Flex gap={["4", "1", "2"]} w={["100%", "95%"]} pos={"relative"}>
          <Box pos={"relative"} mt={[20, 20, 20, 20, 20, "30%"]}>
            <Box pos={"absolute"} top={"-20%"} left={"-8%"}>
              <Image
                src="./discount.gif"
                objectFit={"contain"}
                alt="Discount"
                w={"40%"}
              />
            </Box>
            <Image
              src={girls}
              objectFit={"cover"}
              ms={{
                base: "18%",
                sm: "20%",
                md: "16%",
                lg: "20%",
                xl: "13%",
                "2xl": "20%",
              }}
              w={{
                "2xl": "18vw",
                xl: "19vw",
                lg: "80%",
                md: "18vw",
                base: "80%",
              }}
            />
            <Image
              src={family}
              objectFit={"cover"}
              mt={[1, 2, 4, 4, 5, 10]}
              w={{
                "2xl": "130vw",
                xl: "220vw",
                lg: "865vh",
                md: "520vw",
                base: "80%",
                sm: "400vw",
              }}
            />
          </Box>
          <Box mt={[20, 20, 20, 20, 20, "30%"]}>
            <Image
              src={woman}
              objectFit={"contain"}
              ms={["0%", "5%"]}
              w={{
                md: "444vw",
                sm: "320vw",
                xl: "186vw",
                lg: "235vw",

                "2xl": "109vw",
              }}
            />
          </Box>
        </Flex>

        <Box
          mt={{
            sm: 0,
            base: 0,
            md: "20%",
            lg: "12%",
            xl: "10%",
            "2xl": "35%",
          }}
        >
          <Heading
            color={"#FFFFFF"}
            mt={8}
            fontSize={{
              base: "22px",
              sm: "24px",
              md: "25px",
              lg: "33px",
              xl: "45px",
              "2xl": "60px",
            }}
            ms={{
              sm: 0,
              base: 0,
              lg: 0,
              xl: 0,
              "2xl": 0,
              md: 0,
            }}
            fontFamily={`CustomFontBold, MatterSQ-SemiBold`}
          >
            Shop products you love
          </Heading>
          <Heading
            color={"#FFFFFF"}
            fontSize={{
              base: "22px",
              sm: "24px",
              md: "25px",
              lg: "33px",
              xl: "45px",
              "2xl": "60px",
            }}
            ms={{
              sm: 0,
              base: 0,
              lg: 0,
              xl: 0,
              "2xl": 0,
              md: 0,
            }}
            fontFamily={`CustomFontBold, MatterSQ-SemiBold`}
          >
            stress-free{" "}
            <span role="img" aria-label="Heart">
              ❤️
            </span>
          </Heading>
          <Box mt={{ sm: 2, base: 2, md: 3, lg: "3%", xl: "4%", "2xl": "3%" }}>
            <Text
              fontSize={{
                base: "14px",
                sm: "14px",
                md: "14px",
                lg: "14px",
                xl: "15px",
                "2xl": "17px",
              }}
              color={"#B4BECB"}
              w={{ base: 250, md: 335, lg: 460, xl: 520, sm: 307, "2xl": 933 }}
              pr={{ base: 1 }}
              fontFamily={`CustomFont, MatterSQ-Regular`}
            >
              Experience interactive live shopping events with expert sellers,
              personalized recommendations, and Q&A. Connect with a community of
              shoppers, shop conveniently from home, and enjoy secure payment
              processing.
            </Text>
          </Box>
          <Box
            mt={{ sm: "30px", base: "30px", md: 2, lg: "10%", "2xl": "7%" }}
            display={["none", "none", "none", "flex"]}
          >
            <CustomButton width={"15vw"} p={3} scrollTo="early-access" />
          </Box>
        </Box>
      </SimpleGrid>
    </Center>
  );
}

export default Shop;
