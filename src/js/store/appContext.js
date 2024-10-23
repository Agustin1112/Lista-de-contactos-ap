import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [store, setStore] = useState({
        contacts: []
    });

    const actions = {
        getContacts: () => {
            // Lógica para obtener contactos
        },
        deleteContact: (id) => {
            // Lógica para eliminar contacto
        },
        // Otras acciones
    };

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    );
};

