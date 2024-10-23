import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./views/Contact";
import { AddContact } from "./views/AddContact";

const Layout = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Contact />} />
                <Route path="/add/:id?" element={<AddContact />} /> {/* La ruta puede ser con o sin id */}
            </Routes>
        </Router>
    );
};

export default Layout;


