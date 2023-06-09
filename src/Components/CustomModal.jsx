import {
  Text,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Heading,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";

function CustomModal({ isOpen, onClose, text }) {
  // const [value, setValue] = useState("1");
  // const [textValue, setTextValue] = useState(() => text || "");
  const [userType, setUserType] = useState("1");
  const [email, setEmail] = useState(() => text || "");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("EMAIL", email);
    formData.append("MMERGE6", userType);

    fetch(
      "https://gmail.us17.list-manage.com/subscribe/post?u=f40c946c55e7b05cc67bf06ce&id=0795a9c671&f_id=00a26ae0f0",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
        } else {
          console.log("Form submission failed");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleButtonClick = () => {
    handleSubmit(event);
    console.log("Button clicked");
  };

  React.useEffect(() => {
    if (text) {
      let val = localStorage.getItem("address");
      setEmail(val);
    }
  }, []);

  const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

  const modalStyle = {
    border: "0.1 solid #63768D",
    marginRight: isSmallerThanMd ? "auto" : "6%",
    marginTop: "5%",
    borderRadius: 5,
  };

  const inputStyles = {
    border: "0.1px solid #63768D",
    marginTop: "10%",
    fontSize: "13px",
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      w={"20%"}
      // mr={{ xl: "30%" }}
    >
      <DrawerOverlay />
      <DrawerContent
        style={modalStyle}
        bg="#1B1C20"
        h={{ xl: "50vh", "2xl": "33vh", md: "30vh", lg: "12vh", sm: "50%" }}
      >
        <DrawerHeader color={"#FFFFFF"} textAlign={"center"} fontSize={"15px"}>
          Join our waitlist
        </DrawerHeader>
        <DrawerCloseButton color={"#FFFFFF"} fontSize={"7px"} mt={1} />
        <DrawerBody fontSize={"12px"} textAlign={"center"} color={"#B4BECB"}>
          <Text>Fill this short form to be among the first to know</Text>
          <Text>when we launch</Text>
          <div id="mc_embed_signup">
            <form
              action="https://gmail.us17.list-manage.com/subscribe/post?u=f40c946c55e7b05cc67bf06ce&amp;id=0795a9c671&amp;f_id=00a26ae0f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate
              onSubmit={handleSubmit}
            >
              <Input
                placeholder="Enter email address"
                style={inputStyles}
                value={email}
                onChange={handleEmailChange}
              />

              <RadioGroup
                mt={5}
                value={userType}
                onChange={handleUserTypeChange}
              >
                <Stack direction="row" gap={5}>
                  <Radio value="1" colorScheme="red">
                    <Heading fontSize={"12px"}>I’m a shopper</Heading>
                  </Radio>
                  <Radio value="2" colorScheme="red">
                    <Heading fontSize={"12px"}> I’m a seller</Heading>
                  </Radio>
                </Stack>
              </RadioGroup>

              <Button
                color="#FFFFFF"
                bg="#FA4354"
                size="sm"
                fontSize={"15px"}
                mt={7}
                mb={5}
                w={"100%"}
                _hover={{ bg: "rgba(250, 67, 84, 0.5)" }}
                _active={{
                  bg: "#FA4354",
                  transform: "scale(0.98)",
                }}
                _focus={{
                  boxShadow: "0 0 0 5px rgba(0, 0, 0, 0.5)",
                }}
                onClick={handleButtonClick}
                fontFamily={`CustomFontMedium, MatterSQ-Medium`}
              >
                Join our waitlist
              </Button>

              <div>
                {/* <input
                    type="email"
                    value=""
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required
                  /> */}

                {/* <Input
                    placeholder="Enter email address"
                    type="email"
                    style={inputStyles}
                    value={textValue}
                    onChange={(e) => {
                      setTextValue(e.target.value);
                    }}
                    id="mce-EMAIL"
                    required
                  /> */}

                {/* <div className="mc-field-group input-group">
                  <ul>
                    <li>
                      <input
                        type="radio"
                        value="Shopper"
                        name="MMERGE6"
                        id="mce-MMERGE6-0"
                        color="red"
                      />
                      <label htmlFor="mce-MMERGE6-0">Shopper</label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        value="Seller"
                        name="MMERGE6"
                        id="mce-MMERGE6-1"
                      />
                      <label htmlFor="mce-MMERGE6-1">Seller</label>
                    </li>
                  </ul>
                </div> */}
                {/* <div hidden="true">
                  <input type="hidden" name="tags" value="6543261,6543265" />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div> */}
                {/* <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_f40c946c55e7b05cc67bf06ce_0795a9c671"
                    tabIndex="-1"
                    value=""
                  />
                </div> */}
                {/* <div className="optionalParent">
                  <div className="clear foot">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div> */}
              </div>
            </form>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

// (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='MMERGE6';ftypes[6]='radio';}(jQuery));var $mcj = jQuery.noConflict(true);

export default CustomModal;
