import { Box, Button, useDisclosure } from "@chakra-ui/react";
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
        <Button
          color="#FFFFFF"
          bg={props.bg ? props.bg : "#FA4354"}
          size={props?.size ? props.size : "md"}
          w={props.width ? props.width : "120%"}
          fontSize={"12px"}
          _hover={{ bg: "rgba(250, 67, 84, 0.5)" }}
          _active={{
            bg: "#FA4354",
            transform: "scale(0.98)",
          }}
          _focus={{
            boxShadow: "0 0 0 5px rgba(0, 0, 0, 0.5)",
          }}
          fontFamily={`CustomFontBold, Matter-Bold`}
          onClick={onOpen}
          style={props.style}
          textAlign={"center"}
          alignItems={"center"}
        >
          Join our waitlist
        </Button>
      </Box>

      {isOpen && (
        <CustomModal isOpen={isOpen} onClose={onClose} text={props.value} />
      )}
    </>
  );
}

export default CustomButton;
