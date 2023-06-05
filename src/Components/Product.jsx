import {
  Box,
  Center,
  Image,
  Text,
  Heading,
  Button,
  CardBody,
  Card,
  Stack,
  CardFooter,
} from "@chakra-ui/react";
import React from "react";
import { seller } from "../assets/images";
import CustomButton from "./CustomButton";

function Product() {
  return (
    <Center
      px={["4%", "10%"]}
      // bgGradient="linear(to-t, #060809 0%,#060809)"
      w={["100%", "102%"]}
      h={["95vh", "80vh"]}
    >
      <Center mt={"15%"}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          bg="#1A1C1F"
          borderRadius={20}
        >
          <Stack p={[0, 2]}>
            <CardBody>
              <Heading color="#FFFFFF" fontSize={"35px"} mt={2} ms={[0, 3]}>
                Sell 10x faster on
              </Heading>
              <Heading
                color="#FFFFFF"
                fontSize={"35px"}
                mt={[0, 2]}
                ms={[0, 3]}
              >
                Kommerce
              </Heading>
              <Text
                py="2"
                color="#FFFFFF"
                fontSize="14px"
                mt={[1, 3]}
                lineHeight={2}
                ms={[0, 3]}
              >
                Gain access to a larger audience of engaged shoppers, interact
                directly with customers in real-time to boost trust and sales,
                streamline selling processes for maximum efficiency and
                convenience, connect with like-minded shoppers to foster brand
                loyalty and a loyal community, and benefit from dedicated seller
                support and training materials.
              </Text>
            </CardBody>
            <CardFooter display={["none", "flex"]}>
              <Box ms={3} mb={2}>
                <CustomButton />
              </Box>
            </CardFooter>
          </Stack>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px", md: "510px" }}
            src={seller}
            alt="Caffe Latte"
          />
        </Card>
      </Center>
    </Center>
  );
}

export default Product;
