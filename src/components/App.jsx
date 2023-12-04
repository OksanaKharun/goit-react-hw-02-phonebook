
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const [state, setState] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
   
  });

  const handleNameChange = (e) => {
    setState((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const handleNumberChange = (e) => {
    setState((prevState) => ({ ...prevState, number: e.target.value }));
  };

const handleFilterChange = (e) => {
    setState((prevState) => ({ ...prevState, filter: e.target.value }));
  };

const addContact = (e) => {
  e.preventDefault();

  const { name, number, contacts } = state;

  if (!name.trim() || !number.trim()) return;

  const isNameExist = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

  if (isNameExist) {
    alert(`${name} is already in contacts.`);
    return;
  }

  const newContact = { id: nanoid(), name, number };
  setState((prevState) => ({ contacts: [...prevState.contacts, newContact], name: '', number: '' }));
};

  const deleteContact = (id) => {
    const updatedContacts = state.contacts.filter((contact) => contact.id !== id);
    setState((prevState) => ({ ...prevState, contacts: updatedContacts }));
  };

const filteredContacts = state.contacts.filter((contact) =>
  contact.name && contact.name.toLowerCase().includes((state.filter || '').toLowerCase())
);

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm
      name={state.name}
      number={state.number}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}
      addContact={addContact}
    />
      <h2>Contacts</h2>
      <Filter filter={state.filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;