import { Box, Button, useDisclosure, Text, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomModal from "./CustomModal";

function CustomButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(() => {
  //   let val = localStorage.getItem("address");
  //   setText(val);
  // }, []);

  return (
    <>
      <Box>
        <Text
          as="button"
          color="#FFFFFF"
          bg={props.bg ? props.bg : "#FA4354"}
          w={props.width}
          fontSize={"12px"}
          fontFamily={`CustomFontBold, Matter-Bold`}
          onClick={onOpen}
          style={props.style}
          textAlign="center"
          p={props?.p ? props?.p : 2.5}
          borderRadius={6}
        >
          Get early access
        </Text>
      </Box>

      {isOpen && (
        <CustomModal isOpen={isOpen} onClose={onClose} text={props.value} />
      )}
    </>
  );
}

export default CustomButton;
