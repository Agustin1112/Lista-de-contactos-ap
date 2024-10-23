import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext"; // Ajusta la ruta si es necesario
import ContactCard from "../component/ContactCard"; // Asegúrate de que la ruta sea correcta

export const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts(); // Obtener los contactos al cargar la vista
    }, []);

    // Función de manejo para editar un contacto
    const handleEdit = (contact) => {
        // Implementa aquí la lógica para editar el contacto
        console.log("Edit contact:", contact);
        // Aquí puedes redirigir a otra página o abrir un formulario, etc.
    };

    return (
        <div className="container">
            <h1>Contacts</h1>
            <div className="row">
                {store.contacts.map(contact => (
                    <ContactCard 
                        key={contact.id} 
                        contact={contact} 
                        onDelete={() => actions.deleteContact(contact.id)} 
                        onEdit={() => handleEdit(contact)} // Asegúrate de que onEdit tenga un valor
                    />
                ))}
            </div>
        </div>
    );
};



