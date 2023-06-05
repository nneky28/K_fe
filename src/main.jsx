import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "./styles.css";

const theme = extendTheme({
  fonts: {
    heading: `CustomFontBold, Matter-Bold`,
    body: `CustomFont, Matter-regular`,
  },
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>
);
