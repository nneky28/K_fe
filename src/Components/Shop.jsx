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
    <Center bgGradient="linear(to-l, #060809 0%,#060809)">
      <SimpleGrid columns={2} spacing={5} ms={["0%", "5%"]} px={[4, "5%"]}>
        <Flex gap={["2", "0"]} w={"90%"}>
          <Box mt={[10, 40]}>
            <Image
              src={girls}
              objectFit={"contain"}
              ms={["0%", "9%"]}
              style={{ width: "230px" }}
            />
            <Image
              src={family}
              objectFit={"contain"}
              mt={[1, 4]}
              ms={["1%", "0%"]}
              style={{ width: "350px" }}
            />
          </Box>
          <Box mt={[0, 40]}>
            <Image
              src={woman}
              objectFit={"contain"}
              style={{ width: "309px", height: "325px" }}
              ms={["0%", "5%"]}
            />
          </Box>
        </Flex>
        <Box mt={[2, 40]}>
          <Heading color={"#FFFFFF"} mt={8}>
            Shop products you
          </Heading>
          <Heading color={"#FFFFFF"}>
            love stress-free{" "}
            <span role="img" aria-label="Heart">
              ❤️
            </span>
          </Heading>
          <Box w={40} mt={6}>
            <Text fontSize={"12.5px"} color={"#B4BECB"} w={[380, 460]}>
              Experience interactive live shopping events with expert sellers,
              personalized recommendations, and Q&A. Connect with a community of
              shoppers, shop conveniently from home, and enjoy secure payment
              processing.
            </Text>
          </Box>
          <Box mt={8} display={["none", "flex"]}>
            <CustomButton />
          </Box>
        </Box>
      </SimpleGrid>
    </Center>
  );
}

export default Shop;
