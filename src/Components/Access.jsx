import {
  Box,
  Flex,
  Text,
  Center,
  Spacer,
  Image,
  Heading,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { merchant, sell } from "../assets/images";
import CustomButton from "./CustomButton";

function Access() {
  const flexDirection = useBreakpointValue({
    base: "column",
    md: "row",
    lg: "row",
  });
  const [isSmallerThanMd] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)"
  );
  const center = useBreakpointValue({
    sm: "center",
    lg: "flex-start",
  });
  return (
    <Box
      p={"5%"}
      id="early-access"
      pos={"relative"}
      w={"100%"}
      justifyContent={"center"}
      alignSelf={"center"}
      bg="#060809"
    >
      <Tabs variant="unstyled" pos={"relative"}>
        <TabList
          bg={"#495969"}
          borderRadius={"full"}
          w={{
            base: "100%",
            sm: "80%",
            md: "50%",
            lg: "40%",
            xl: "24%",
            "2xl": "20%",
          }}
          mx={isSmallerThanMd ? "auto" : 0}
          ms={{ sm: 7, md: 4, lg: 4, xl: 4, "2xl": 4 }}
          mt={"12%"}
          display={"flex"}
          alignItems={"center"}
          h={["32px", "32px", "32px", "32px", "32px", "33px"]}
          color={"#FFFFFF"}
        >
          <Tab
            fontSize={["13px", "13px", "13px", "13px", "13px", "20px"]}
            fontFamily="CustomFont, MatterSQ-Regular"
            w={isSmallerThanMd ? "100%" : "64%"}
            _selected={{
              bg: "#FA4354",
              borderRadius: "full",
              h: "28px",
              ml: isSmallerThanMd ? 0.5 : 0.5,
            }}
          >
            I’m a Seller
          </Tab>
          <Tab
            fontSize={["12px", "13px", "13px", "13px", "13px", "20px"]}
            fontFamily="CustomFont, MatterSQ-Regular"
            w={{
              base: "64%",
              sm: "64%",
              md: "72%",
              lg: "60%",
              xl: "60%",
              "2xl": "60%",
            }}
            _selected={{
              bg: "#FA4354",
              borderRadius: "full",
              h: "28px",
              mr: isSmallerThanMd ? 0.5 : 0.5,
            }}
          >
            I’m a Shopper
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex direction={flexDirection}>
              <Box mt={5}>
                <Heading
                  color="#FFFFFF"
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "95%",
                    lg: "405px",
                    xl: "405px",
                    "2xl": "100%",
                  }}
                  fontFamily="CustomFontMedium, MatterSQ-Medium"
                  fontSize={["24px", "24px", "28px", "28px", "28px", "38px"]}
                  textAlign={{
                    sm: "center",
                    lg: "left",
                    xl: "left",
                    md: "left",
                    "2xl": "left",
                  }}
                >
                  Be among the first sellers to experience Kommerce.
                </Heading>
                <Text
                  textAlign={{
                    sm: "center",
                    lg: "left",
                    xl: "left",
                    md: "left",
                    "2xl": "left",
                  }}
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "85%",
                    lg: "391px",
                    xl: "391px",
                    "2xl": "100%",
                  }}
                  fontSize={["14px", "14px", "14px", "14px", "14px", "20px"]}
                  fontFamily="CustomFont, MatterSQ-Regular"
                  color={"#B4BECB"}
                  mt={3}
                >
                  Get up to ₦10,000 ad-free credit! Plus, invite two other
                  businesses and unlock up to ₦50,000 ad-free credit.
                </Text>
                <Input
                  variant="outline"
                  placeholder="Enter your business name"
                  bg="#1A1C1F"
                  borderColor="#1A1C1F"
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "80%",
                    lg: "405px",
                    xl: "405px",
                    "2xl": "100%",
                  }}
                  h={"45px"}
                  mr={2}
                  color="#B4BECB"
                  fontSize={"13px"}
                  fontFamily={`CustomFont, MatterSQ-Regular`}
                  mt={8}
                />
                <Box>
                  <Input
                    variant="outline"
                    placeholder="Enter your email address"
                    bg="#1A1C1F"
                    borderColor="#1A1C1F"
                    w={{
                      base: "100%",
                      sm: "100%",
                      md: "80%",
                      lg: "405px",
                      xl: "405px",
                      "2xl": "100%",
                    }}
                    h={"45px"}
                    mr={2}
                    mt={4}
                    color="#B4BECB"
                    fontSize={"13px"}
                    fontFamily={`CustomFont, MatterSQ-Regular`}
                  />
                </Box>
                <Box mt={8}>
                  <CustomButton
                    width={{
                      base: "100%",
                      sm: "100%",
                      md: "80%",
                      lg: "405px",
                      xl: "405px",
                      "2xl": "100%",
                    }}
                  />
                </Box>
                <Center
                  width={{
                    base: "100%",
                    sm: "100%",
                    md: "80%",
                    lg: "405px",
                    xl: "405px",
                    "2xl": "86%",
                  }}
                >
                  <Text
                    fontSize={"14px"}
                    fontFamily="CustomFont, MatterSQ-Regular"
                    color={"#FA4354"}
                    textAlign={"center"}
                    textDecoration={"underline"}
                    mt={6}
                  >
                    Terms and conditions apply
                  </Text>
                </Center>
              </Box>
              <Spacer />

              <Box
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "40%",
                  xl: "40%",
                  "2xl": "40%",
                }}
                mt={{
                  base: "15%",
                  sm: "15%",
                  md: "12",
                  lg: "-5%",
                  xl: "-8%",
                  "2xl": "-2%",
                }}
              >
                <Image src={sell} objectFit={"contain"} />
              </Box>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex direction={flexDirection}>
              <Box mt={5}>
                <Heading
                  color="#FFFFFF"
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "95%",
                    lg: "405px",
                    xl: "405px",
                    "2xl": "100%",
                  }}
                  fontFamily="CustomFontMedium, MatterSQ-Medium"
                  fontSize={["24px", "24px", "28px", "28px", "28px", "38px"]}
                  textAlign={{
                    sm: "center",
                    lg: "left",
                    xl: "left",
                    md: "left",
                    "2xl": "left",
                  }}
                >
                  Explore a whole new way of shopping with Kommerce
                </Heading>
                <Text
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "80%",
                    lg: "391px",
                    xl: "391px",
                    "2xl": "90%",
                  }}
                  fontSize={["14px", "14px", "14px", "14px", "14px", "20px"]}
                  fontFamily="CustomFont, MatterSQ-Regular"
                  color={"#B4BECB"}
                  mt={3}
                  textAlign={{
                    sm: "center",
                    lg: "left",
                    xl: "left",
                    md: "left",
                    "2xl": "left",
                  }}
                >
                  Unlock up to ₦20,000 worth of shopping vouchers! Apply for
                  access now and invite three friends to Kommerce to enjoy this
                  exclusive offer.
                </Text>
                <Input
                  variant="outline"
                  placeholder="Enter your first name"
                  bg="#1A1C1F"
                  borderColor="#1A1C1F"
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "80%",
                    lg: "405px",
                    xl: "405px",
                    "2xl": "86%",
                  }}
                  h={"45px"}
                  color="#B4BECB"
                  fontSize={"13px"}
                  fontFamily={`CustomFont, MatterSQ-Regular`}
                  mt={8}
                />
                <Box>
                  <Input
                    variant="outline"
                    placeholder="Enter your email address"
                    bg="#1A1C1F"
                    borderColor="#1A1C1F"
                    w={{
                      base: "100%",
                      sm: "100%",
                      md: "80%",
                      lg: "405px",
                      xl: "405px",
                      "2xl": "86%",
                    }}
                    h={"45px"}
                    mr={2}
                    mt={4}
                    color="#B4BECB"
                    fontSize={"13px"}
                    fontFamily={`CustomFont, MatterSQ-Regular`}
                  />
                </Box>
                <Box mt={8}>
                  <CustomButton
                    width={{
                      base: "100%",
                      sm: "100%",
                      md: "80%",
                      lg: "405px",
                      xl: "405px",
                      "2xl": "86%",
                    }}
                  />
                  <Center
                    width={{
                      base: "100%",
                      sm: "100%",
                      md: "80%",
                      lg: "405px",
                      xl: "405px",
                      "2xl": "86%",
                    }}
                  >
                    <Text
                      fontSize={"14px"}
                      fontFamily="CustomFont, MatterSQ-Regular"
                      color={"#FA4354"}
                      textDecoration={"underline"}
                      mt={6}
                    >
                      Terms and conditions apply
                    </Text>
                  </Center>
                </Box>
              </Box>
              <Spacer />
              <Box
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "40%",
                  xl: "40%",
                  "2xl": "40%",
                }}
                mt={{
                  base: "15%",
                  sm: "15%",
                  md: "5%",
                  lg: "-8%",
                  xl: "-8%",
                  "2xl": "-2%",
                }}
              >
                <Image src={merchant} objectFit={"contain"} h={"100%"} />
              </Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Access;
