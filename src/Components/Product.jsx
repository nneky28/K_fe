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
      px={{ base: "1%", sm: "2%", md: "4%", lg: "10%" }}
      // bgGradient="linear(to-t, #060809 0%,#060809)"
      // w={"102%"}
      w={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "104%",
        xl: "104%",
        "2xl": "104%",
      }}
      // h={{ base: "50%", sm: "40vh", md: "50%", lg: "30%" }}
    >
      <Center mt={"15%"}>
        <Card
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            "2xl": "row",
          }}
          overflow="hidden"
          bg="#1A1C1F"
          borderRadius={20}
        >
          <Stack
            p={[0, 0, 0, 2]}
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "50%",
              xl: "50%",
              "2xl": "50%",
            }}
          >
            <CardBody>
              <Heading
                color="#FFFFFF"
                fontSize={{
                  base: "22px",
                  sm: "22px",
                  md: "35px",
                  lg: "42px",
                  xl: "35px",
                  "2xl": "60px",
                }}
                mt={3}
                ms={[0, 3]}
                w={"100%"}
              >
                Sell 10x faster on
              </Heading>
              <Heading
                color="#FFFFFF"
                fontSize={{
                  base: "22px",
                  sm: "22px",
                  md: "35px",
                  lg: "42px",
                  xl: "35px",
                  "2xl": "60px",
                }}
                mt={[0, 2]}
                ms={[0, 3]}
              >
                Kommerce
              </Heading>
              <Text
                py="2"
                color="#FFFFFF"
                fontSize={{
                  base: "13px",
                  sm: "13px",
                  md: "15px",
                  lg: "14.5px",
                  xl: "15px",
                  "2xl": "17px",
                }}
                mt={[1, 3]}
                lineHeight={2}
                ms={[0, 3]}
                // w={"100%"}
              >
                Gain access to a larger audience of engaged shoppers, interact
                directly with customers in real-time to boost trust and sales,
                streamline selling processes for maximum efficiency and
                convenience, connect with like-minded shoppers to foster brand
                loyalty and a loyal community, and benefit from dedicated seller
                support and training materials.
              </Text>
            </CardBody>
            <CardFooter display={["none", "none", "none", "flex"]}>
              <Box ms={3} mb={2}>
                <CustomButton />
              </Box>
            </CardFooter>
          </Stack>

          <Box
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "50%",
              xl: "50%",
              "2xl": "50%",
            }}
            pos={"relative"}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
              src={seller}
              alt="Caffe Latte"
              h={"100%"}
            />
            <Box
              pos={"absolute"}
              h={"100%"}
              w={"100px"}
              top={0}
              bottom={0}
              bgGradient={{
                base: "linear(to-t, #1A1C1F 12.29%, #1A1C1F 48.43%,rgba(26, 28, 31, 0)  66.41%)",
                md: "linear(to-r, #1A1C1F 12.29%, #1A1C1F 48.43%,rgba(26, 28, 31, 0)  66.41%)",
                lg: "linear(to-r, #1A1C1F 12.29%, #1A1C1F 48.43%,rgba(26, 28, 31, 0)  66.41%)",
              }}
              opacity={0.6}
            ></Box>
          </Box>
        </Card>
      </Center>
    </Center>
  );
}

export default Product;
