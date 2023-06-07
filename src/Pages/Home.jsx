import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Gallery from "../Components/Gallery";
import { Box } from "@chakra-ui/react";
import Shop from "../Components/Shop";
import Product from "../Components/Product";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Box
        bgGradient="linear(to-tl, #060809 0%,  rgba(6, 8, 9, 0.6),#060809)"
        width={"100%"}
        overflow={"hidden"}
        // h={"100%"}
        bg="black"
      >
        <Navbar />
        <Hero />
        <Gallery />
        <Shop />
        <Product />
        <Experience />
        <Footer />
      </Box>
    </>
  );
}

export default Home;
