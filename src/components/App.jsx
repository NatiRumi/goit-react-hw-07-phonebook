import React from 'react';
import Form from '../components/Form/Form';
import FormSearch from 'components/Form/FormSearch';
import ContactsList from './ContactsList/ContactsList';
import css from './Form/Form.module.css';

function App() {
  return (
    <React.Fragment>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <FormSearch />
        <ContactsList />
      </div>
    </React.Fragment>
  );
}

export default App;
