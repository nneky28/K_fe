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
    <>
      <Center display={["flex", "flex", "none"]} mt={20} px={6}>
        <Image src="./card.svg" objectFit={"contain"} />
      </Center>
      <Center
        px={{ base: "1%", sm: "2%", md: "4%", lg: "10%" }}
        w={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "104%",
          xl: "104%",
          "2xl": "104%",
        }}
        display={["none", "none", "flex"]}
      >
        <Center mt={"15%"}>
          <Card
            direction={{
              md: "row",
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
                    lg: "45px",
                    xl: "45px",
                    "2xl": "60px",
                  }}
                  fontFamily={`CustomFontBold, MatterSQ-SemiBold`}
                  mt={3}
                  ms={[0, 3]}
                  w={{ "2xl": "100%", xl: "80%", sm: "100%" }}
                >
                  Sell 10x faster on Kommerce
                </Heading>

                <Text
                  py="2"
                  color="#B4BECB"
                  fontSize={{
                    base: "13px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "15px",
                    "2xl": "24px",
                  }}
                  fontFamily={`CustomFont, MatterSQ-Regular`}
                  mt={[1, 3, 3, 3, 3, 12]}
                  lineHeight={["26px", "26px", "26px", "26px", "26px", "60px"]}
                  ms={[0, 3]}

                  // w={"100%"}
                >
                  Gain access to a larger audience of engaged shoppers, interact
                  directly with customers in real-time to boost trust and sales,
                  streamline selling processes for maximum efficiency and
                  convenience, connect with like-minded shoppers to foster brand
                  loyalty and a loyal community, and benefit from dedicated
                  seller support and training materials.
                </Text>
              </CardBody>
              <CardFooter display={["none", "none", "none", "flex"]}>
                <Box ms={3} mb={2}>
                  <CustomButton width={"15vw"} p={3} />
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
            </Box>
          </Card>
        </Center>
      </Center>
    </>
  );
}

export default Product;
