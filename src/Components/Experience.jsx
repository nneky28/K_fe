import { Box, Image, Center } from "@chakra-ui/react";
import React from "react";

function Experience() {
  return (
    <Box
      bgGradient="linear(to-t, #060809 0%,#060809)"
      p={4}
      h={["40vh", "85vh"]}
    >
      <Box
        bgImage="url('./text.svg')"
        backgroundPosition="center"
        backgroundRepeat="repeat"
        backgroundSize={"75% 35%"}
        height="15vh"
        alignItems="center"
        justifyContent="center"
        position={"relative"}
        marginTop={"15%"}
      >
        <Center>
          <Box
            bgImage="url('./phoneBg.png')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={"205px 270px"}
            height="35vh"
            alignItems="center"
            justifyContent="center"
            position="relative"
            bottom={"14"}
            w={["80%", "27.5%"]}
            borderRadius={"40%"}
          >
            <Center>
              <Image
                src="./phone.png"
                objectFit="contain"
                style={{
                  top: 13,
                }}
              />
            </Center>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}

export default Experience;
