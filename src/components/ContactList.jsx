
import React from 'react';


const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contact-menu">
      {contacts.map((contact) => (
        <li className="contact-list" key={contact.id}>
          {contact.name}: {contact.number}
          <button className="delete-btn" onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;