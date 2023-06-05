import { Box, Button, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";

function Navbar() {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    bg: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
  };
  return (
    <Box
      bg={isNavbarTransparent ? navbarStyle : "black"}
      w="100%"
      p={4}
      display="flex"
      flexDirection="row"
      justifyContent={["center", "space-between"]}
      px={["1%", "10%"]}
      position="fixed"
      top="0"
      zIndex="10"
      style={navbarStyle}
    >
      <Image src="./logo.svg" style={{ width: "100px", height: "23px" }} />
      <Box display={["none", "flex"]}>
        <CustomButton
          bg="transparent"
          style={{
            border: "0.1px solid #FA4354",
            width: "140%",
            fontSize: "12px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Navbar;
