import React, { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Gallery from "../Components/Gallery";
import { Box, Center, Image } from "@chakra-ui/react";
import Shop from "../Components/Shop";
import Product from "../Components/Product";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Access from "../Components/Access";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  const Gallery = React.lazy(() => import("../Components/Gallery"));
  // const Shop = React.lazy(() => import("../Components/Shop"));

  return (
    <>
      {isLoading ? (
        <Center bg="#1E1E1E" width={"100%"} overflow={"hidden"} h={"100vh"}>
          <Image
            src="./loading.gif"
            objectFit={"contain"}
            alt="loading"
            w={"30%"}
          />
        </Center>
      ) : (
        <Box
          bgGradient="linear(to-tl, #060809 0%,  rgba(6, 8, 9, 0.6),#060809)"
          width={"100%"}
          overflow={"hidden"}
          bg="black"
          pos={"relative"}
        >
          <Navbar />
          <Hero />
          <Suspense fallback={<Box bg="black" />}>
            <Gallery />
            <Shop />
            <Product />
            <Experience />
            <Access />
          </Suspense>

          <Footer />
        </Box>
      )}
    </>
  );
}

export default Home;
