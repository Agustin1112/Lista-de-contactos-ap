import React from 'react';

const ContactCard = ({ contact, onDelete, onEdit }) => {
    return (
        <div className="contact-card">
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default ContactCard;

