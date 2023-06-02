import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ChakraProvider>
    <CSSReset />
    <App />
  </ChakraProvider>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <CSSReset />
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
