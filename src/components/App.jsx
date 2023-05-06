import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import ContactsList from './ContactsList/ContactsList';


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    names: '',
    number: ''
  };

  addItem = (data) => {
    let contact = {
      'id': nanoid(),
      'name': data.name,
      'number': data.number
    };
    this.setState(prevState => ({
      contacts: [contact, ...this.state.contacts]
    }));
  }

  filterList = (searchText) => {
    console.log(searchText.filter)
    
    this.setState({contacts: this.state.contacts.filter(contact => contact.name.toLowerCase().includes(searchText.filter))});
    
    // this.setState(prevState => ({
    //   contacts: this.state.contacts.filter(contact => contact.name.toLowerCase().includes(searchText.filter))
    // }));
    // console.log(this.state)
  }


  render() {
    return (
      <React.Fragment>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addItem}/>
        <ContactsList contacts={this.state.contacts} filter={this.filterList}/>
      </React.Fragment>
    );
  }
};

export default App;
