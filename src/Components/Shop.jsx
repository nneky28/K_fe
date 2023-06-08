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
} from "@chakra-ui/react";
import React from "react";
import { family, girls, woman } from "../assets/images";
import CustomButton from "./CustomButton";
// Flex
function Shop() {
  return (
    <Center pos={"relative"}>
      <SimpleGrid
        columns={[1, 1, 2, 2, 2]}
        spacing={{ base: "0", sm: "0", lg: 5, md: 5, "2xl": 12 }}
        ms={["0%", "5%"]}
        px={[4, "5%"]}
      >
        <Flex gap={["4", "0", "2"]} w={["100%", "95%"]}>
          <Box mt={[10, 40]}>
            <Image
              src={girls}
              objectFit={"cover"}
              ms={{
                base: "18%",
                sm: "20%",
                md: "10%",
                lg: "20%",
                xl: "10%",
                "2xl": "30%",
              }}
              w={{
                "2xl": "70%",
                xl: "19vw",
                lg: "80%",
                md: "18vw",
                base: "80%",
              }}
            />
            <Image
              src={family}
              objectFit={"cover"}
              mt={[1, 2, 4, 4, 5]}
              w={{
                "2xl": "70%",
                xl: "215vw",
                lg: "205vh",
                md: "140vh",
                base: "80%",
                sm: "400vw",
              }}
            />
          </Box>
          <Box mt={[0, 40]}>
            <Image
              src={woman}
              objectFit={"contain"}
              ms={["0%", "5%"]}
              w={{ md: "184vw", sm: "320vw", xl: "184vw", lg: "188vw" }}
            />
          </Box>
        </Flex>

        <Box
          mt={{ sm: 2, base: 2, md: "40%", lg: "35%", xl: "30%", "2xl": "25%" }}
        >
          <Heading
            color={"#FFFFFF"}
            mt={8}
            fontSize={{
              base: "20px",
              sm: "20px",
              md: "30px",
              lg: "33px",
              xl: "35px",
              "2xl": "60px",
            }}
          >
            Shop products you
          </Heading>
          <Heading
            color={"#FFFFFF"}
            fontSize={{
              base: "20px",
              sm: "20px",
              md: "30px",
              lg: "33px",
              xl: "35px",
              "2xl": "60px",
            }}
          >
            love stress-free{" "}
            <span role="img" aria-label="Heart">
              ❤️
            </span>
          </Heading>
          <Box
            w={40}
            mt={{ sm: 2, base: 2, md: 3, lg: "3%", xl: "4%", "2xl": "3%" }}
          >
            <Text
              fontSize={{
                base: "13px",
                sm: "14px",
                md: "14px",
                lg: "14px",
                xl: "15px",
                "2xl": "17px",
              }}
              color={"#B4BECB"}
              w={{ base: 320, md: 335, lg: 460, xl: 480, sm: 415 }}
              pr={{ base: 10 }}
              // w={[450, 315, 335, 460, 600]}
            >
              Experience interactive live shopping events with expert sellers,
              personalized recommendations, and Q&A. Connect with a community of
              shoppers, shop conveniently from home, and enjoy secure payment
              processing.
            </Text>
          </Box>
          <Box
            mt={{ sm: 2, base: 2, md: 2, lg: "3%", "2xl": "3%" }}
            display={["none", "none", "none", "flex"]}
          >
            <CustomButton width={"15vw"} p={3} />
          </Box>
        </Box>
      </SimpleGrid>
    </Center>
  );
}

export default Shop;
