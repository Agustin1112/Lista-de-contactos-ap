import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contact } from './views/Contact'; // Ajusta la ruta si es necesario
import { AddContact } from './views/AddContact'; // Ajusta la ruta si es necesario

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Contact />} />
                <Route path="/add" element={<AddContact />} />
            </Routes>
        </Router>
    );
};

export default App;
