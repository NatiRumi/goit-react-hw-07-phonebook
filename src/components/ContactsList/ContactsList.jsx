import React from 'react';
import ContactItem from '../ContactsItem/ContactsItem';
import FormSearch from 'components/Form/FormSearch';

const ContactsList = ({contacts, filter}) => {
    
    return(
    <div>
        <h2>Contacts</h2>
        <FormSearch filter={filter}/>
        <ul>
            {contacts.map((contact) => <ContactItem name={contact.name} number={contact.number} key={contact.id}/>)}
        </ul>
    </div>  
)
}

export default ContactsList;