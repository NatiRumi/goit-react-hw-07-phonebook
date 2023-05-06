import React from 'react';
import ContactItem from '../ContactsItem/ContactsItem';

const ContactsList = ({contacts}) => {
    return(
    <div>
        <h2>Contacts</h2>
        <ul>
            {contacts.map((contact) => <ContactItem name={contact.name} key={contact.id}/>)}
        </ul>
    </div>  
)
}

export default ContactsList;