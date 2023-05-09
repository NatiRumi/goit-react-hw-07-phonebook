import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import FormSearch from 'components/Form/FormSearch';
import ContactsList from './ContactsList/ContactsList';
import css from './Form/Form.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // names: '',
    // number: ''
  };

  addItem = data => {
    let contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    const searchArray = this.state.contacts.filter(
      contact => contact.name.toLowerCase() === data.name
    );
    // console.log(searchArray.length);
    if (searchArray.length !== 0) {
      alert(`${data.name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...this.state.contacts],
      }));
    }
  };

  filterList = searchText => {
    console.log(searchText);

    this.setState({
      contacts: this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchText)
      ),
    });
  };

  deleteItem = idItem => {
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== idItem),
    }));
  };
  

  render() {
    return (
      <React.Fragment>
        <div className={css.container}>
          <h1>Phonebook</h1>
          <Form onSubmit={this.addItem} />
          <h2>Contacts</h2>
          {/* <FormSearch filter={this.state.filter} onChange={this.inputChange}/> */}
          <FormSearch onChange={this.filterList} />
          <ContactsList
            contacts={this.state.contacts}
            onDeleteItem={this.deleteItem}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
