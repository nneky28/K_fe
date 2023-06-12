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
      justifyContent={{
        base: "center",
        sm: "center",
        md: "space-between",
        lg: "space-between",
      }}
      px={["1%", "6%"]}
      position="fixed"
      top="0"
      zIndex="10"
      style={navbarStyle}
    >
      <Image
        src="./logo.svg"
        style={{ width: "150px", height: "23px" }}
        mt={2}
      />
      <Box display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}>
        <CustomButton
          bg="transparent"
          width={{ md: "18vw", xl: "14vw" }}
          style={{
            border: "0.1px solid #FA4354",
            fontSize: "13px",
          }}
          scrollTo="early-access"
        />
      </Box>
    </Box>
  );
}

export default Navbar;
