import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('contacts')) return;

    setContacts(JSON.parse(localStorage.getItem('contacts')));
  }, []);

  const addContact = contact => {
    const { name, number } = contact;

    const searchSameName =
      contacts.length > 0 && contacts.map(cont => cont.name).includes(name);

    if (searchSameName) {
      alert(`${name} is already in contacts`);
    } else if (name.length === 0 || number.length === 0) {
      alert('Fields must be filled!');
    } else {
      const newContact = {
        ...contact,
        id: uuidv4(),
      };

      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const getVisibleContacts = () => {
    if (Array.isArray(contacts) && contacts.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return [];
  };

  const removeContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <Filter value={filter} onChangeFilter={changeFilter} />
      )}
      {visibleContacts.length > 0 && (
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={removeContact}
        />
      )}
    </div>
  );
}
