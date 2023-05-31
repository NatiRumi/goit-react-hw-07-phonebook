import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/Slice';
import ContactItem from '../ContactsItem/ContactsItem';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.contacts}>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            key={contact.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
