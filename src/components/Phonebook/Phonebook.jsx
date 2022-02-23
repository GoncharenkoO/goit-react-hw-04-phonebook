import { useState, useEffect, useRef, useCallback } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './ContactsForm';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { getFilteredContacts } from './getFilteredContacts';

import styles from './phonebook.module.css';

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      const data = localStorage.getItem('contacts');
      const parseContacts = JSON.parse(data);
      if (parseContacts && parseContacts.length) {
        setContacts(parseContacts);
      }
      firstRenderRef.current = false;
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleChange = useCallback(({ target }) => setFilter(target.value), []);

  const addContact = useCallback(
    ({ name, number }) => {
      setContacts(prevState => {
        const newContact = {
          name,
          number,
          id: nanoid(),
        };
        return [...prevState, newContact];
      });
      if (contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in contacts`);
        return;
      }
    },
    [contacts]
  );

  const onDeleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(({ id }) => id !== contactId);
    });
  };

  const filteredContacts = getFilteredContacts(filter, contacts);

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Phonebook</h2>
      <ContactsForm onSubmit={addContact} />
      <h2 className={styles.title}>Contacts</h2>
      {contacts.length > 1 && (
        <Filter value={filter} handleChange={handleChange} />
      )}
      {contacts.length > 0 ? (
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </div>
  );
};

export default Phonebook;
