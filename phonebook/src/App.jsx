import React, { Component } from 'react';
import styled from 'styled-components';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const Container = styled.div`
width:  100vw;
height:  100vh;
background-color: #1c0808ff;
display: flex;
flex-direction: column;
align-items: center;
`;
const Title = styled.h1`
color: #fff;
`;
const SubTitle = styled.h2`
color: #fff;
`;


class App extends Component {
  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '4591256'},
    {id: 'id-2', name: 'Hermione Kline', number: '4438912'},
    {id: 'id-3', name: 'Eden Clements', number: '6451779'},
    {id: 'id-4', name: 'Annie Copeland', number: '2279126'},],  
    filter: ''      
  };


  addContact = ({ name, number }) => {
    if (this.isDuplicate(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      number
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact]
    }));
  };


  isDuplicate(name) {
    return this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }


  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };


  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id)
    }));
  };

  getVisibleContacts() {
    const { contacts, filter } = this.state;
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  }

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title>Phonebook</Title>

        <ContactForm onSubmit={this.addContact} />

        <SubTitle>Contacts</SubTitle>
        <Filter
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />
        <ContactList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
