import {
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

function CustomModal({ isOpen, onClose, text }) {
  const [value, setValue] = useState("1");
  const [textValue, setTextValue] = useState(() => text || "");

  const handleChange = (e) => {};

  React.useEffect(() => {
    if (text) {
      let val = localStorage.getItem("address");
      setTextValue(val);
    }
  }, []);

  const modalStyle = {
    border: "0.1px solid #63768D",
    // width: "27%",
  };

  const inputStyles = {
    border: "0.1px solid #63768D",
    marginTop: "10%",
    fontSize: "13px",
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent style={modalStyle} bg="#1B1C20" w={["80%", "27%"]}>
        <ModalHeader color={"#FFFFFF"} textAlign={"center"} fontSize={"15px"}>
          Join our waitlist
        </ModalHeader>
        <ModalCloseButton color={"#FFFFFF"} fontSize={"7px"} mt={1} />
        <ModalBody fontSize={"12px"} textAlign={"center"} color={"#B4BECB"}>
          <Text>Fill this short form to be among the first to know</Text>
          <Text>when we launch</Text>

          <Input
            placeholder="Enter email address"
            style={inputStyles}
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          />

          <RadioGroup
            onChange={setValue}
            value={value}
            mt={5}
            // fontSize={"12px"}
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
            fontSize={"13px"}
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
            onClick={() => console.log("value")}
          >
            Join our waitlist
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
