import { Box, Button, useDisclosure, Text } from "@chakra-ui/react";
import React from "react";
import CustomModal from "./CustomModal";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function CustomButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  const handleButtonClick = () => {
    scroll.scrollTo(props.scrollTo, {
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <ScrollLink
        to={props.scrollTo}
        onClick={handleButtonClick}
        smooth={true}
        duration={500}
      >
        <Text
          as="button"
          color="#FFFFFF"
          bg={props.bg ? props.bg : "#FA4354"}
          w={props.width}
          fontSize={"15px"}
          fontFamily={`CustomFontMedium, MatterSQ-Medium`}
          style={props.style}
          textAlign="center"
          p={props?.p ? props?.p : 1.5}
          h={props.height ? props.height : "45px"}
          borderRadius={props?.mobile ? null : "8px"}
        >
          Get early access
        </Text>
      </ScrollLink>

      {isOpen && (
        <CustomModal isOpen={isOpen} onClose={onClose} text={props.value} />
      )}
    </>
  );
}

export default CustomButton;
