if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service worker registered:", registration);
      })
      .catch((error) => {
        console.error("Error registering service worker:", error);
      });
  });
}

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
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
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
