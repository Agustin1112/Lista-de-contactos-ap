import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const AddContact = ({ match, history }) => {
    const { actions } = useContext(Context);
    const [contact, setContact] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (match.params.id) {
            actions.updateContact(match.params.id, contact);
        } else {
            actions.addContact(contact);
        }
        history.push("/"); // Redirige a la lista de contactos
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="full_name" onChange={handleChange} value={contact.full_name} placeholder="Full Name" />
            <input type="email" name="email" onChange={handleChange} value={contact.email} placeholder="Email" />
            <input type="text" name="phone" onChange={handleChange} value={contact.phone} placeholder="Phone" />
            <input type="text" name="address" onChange={handleChange} value={contact.address} placeholder="Address" />
            <button type="submit">Save</button>
        </form>
    );
};
