const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [], // Aquí almacenamos los contactos
        },
        actions: {
            // Obtener todos los contactos
            getContacts: async () => {
                try {
                    const response = await fetch('https://playground.4geeks.com/apis/fake/contact/');
                    const data = await response.json();
                    setStore({ contacts: data });
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            },

            // Crear nuevo contacto
            addContact: async (contact) => {
                try {
                    const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(contact)
                    });
                    if (response.ok) {
                        const newContact = await response.json();
                        const store = getStore();
                        setStore({ contacts: [...store.contacts, newContact] });
                    }
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },

            // Actualizar contacto
            updateContact: async (id, updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (response.ok) {
                        const store = getStore();
                        const updatedContacts = store.contacts.map(contact =>
                            contact.id === id ? { ...contact, ...updatedContact } : contact
                        );
                        setStore({ contacts: updatedContacts });
                    }
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },

            // Eliminar contacto
            deleteContact: async (id) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        const store = getStore();
                        const filteredContacts = store.contacts.filter(contact => contact.id !== id);
                        setStore({ contacts: filteredContacts });
                    }
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            }
        }
    };
};

export default getState;


