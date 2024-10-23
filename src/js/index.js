import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./store/appContext";

const container = document.getElementById("root"); // Asegúrate de que "root" coincida con el id en tu HTML
const root = createRoot(container); // Crea la raíz

root.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);



