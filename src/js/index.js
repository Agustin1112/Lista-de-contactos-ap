//importo
import React from "react";
import { createRoot } from "react-dom/client";

//inclui tu archivo index.scss en el paquete
import "../styles/index.css";

//importo mis propios componentes
import Layout from "./layout.jsx";

//
const root = createRoot(document.querySelector("#app"));

//renderizo la aplicacion
root.render(<Layout />);

