import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import ContactsList from './ContactsList/ContactsList';


class App extends Component {
  state = {
    contacts: [{'id': "1", 'name': "bob"}, {'id': "2", 'name': "ala"}],
    names: ''
  };

  addItem = (data) => {
    // console.log(data)
    let contact = {
      'id': nanoid(),
      'name': data.name
    };
    this.setState(prevState => ({
      contacts: this.state.contacts.push(contact),
    }));
    console.log(this.state.contacts)
    // this.setState({this.state.contacts.push(contact)})
  }


  render() {
    return (
      <React.Fragment>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addItem}/>
        {/* <Form osbm={this.addItems} contacts={this.state}/> */}
        <ContactsList contacts={this.state.contacts}/>
      </React.Fragment>
    );
  }
};

export default App;
