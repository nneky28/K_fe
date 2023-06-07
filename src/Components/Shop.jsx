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
        <Flex gap={["4", "0", "1"]} w={["100%", "95%"]}>
          <Box mt={[10, 40]}>
            <Image
              src={girls}
              objectFit={"cover"}
              ms={{
                base: "18%",
                sm: "20%",
                md: "39%",
                lg: "40%",
                xl: "40%",
                "2xl": "30%",
              }}
              w={{ "2xl": "70%", xl: "60%", lg: "60%", md: "60%", base: "80%" }}
            />
            <Image
              src={family}
              objectFit={"cover"}
              mt={[1, 2, 4, 3]}
              // ms={["1%", "0%"]}
              // style={{ width: "360px" }}
            />
          </Box>
          <Box
            mt={[0, 40]}
            // h={"50%"}
            w={{
              base: "470%",
              md: "360%",
              lg: "265%",
              xl: "209%",
              "2xl": "147%",
              sm: "394%",
            }}
          >
            <Image src={woman} objectFit={"cover"} ms={["0%", "5%"]} />
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
            mt={{ sm: 2, base: 2, md: 3, lg: "3%", xl: "4%", "2xl": "5%" }}
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
              w={{ base: 320, md: 335, lg: 460, xl: 480 }}
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
            mt={{ sm: 2, base: 2, md: 2, lg: "3%", "2xl": "5%" }}
            display={["none", "none", "none", "flex"]}
          >
            <CustomButton />
          </Box>
        </Box>
      </SimpleGrid>
    </Center>
  );
}

export default Shop;
