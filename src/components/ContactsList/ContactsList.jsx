import React from 'react';
import ContactItem from '../ContactsItem/ContactsItem';


const ContactsList = ({contacts}) => {
    
    return(
    <div>
        <ul>
            {contacts.map((contact) => <ContactItem name={contact.name} number={contact.number} key={contact.id}/>)}
        </ul>
    </div>  
)
}

export default ContactsList;