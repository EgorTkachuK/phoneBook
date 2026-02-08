import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm.jsx';
import Filter from './components/Filter.jsx';
import ContactList from './components/ContactList.jsx';
import { deleteContact } from './redux/actions.js';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1c0808ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`color: #fff;`;
const SubTitle = styled.h2`color: #fff;`;

// HOOK 
function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const isDuplicate = name =>
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm isDuplicate={isDuplicate} />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </Container>
  );
}

//  CLASS
// class App extends React.Component {
//   state = {
//     contacts: [
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
// {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
//     filter: ''
//   };
//   componentDidMount() {
//     const savedContacts = localStorage.getItem('phonebook_contacts');
//     if (savedContacts) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem(
//         'phonebook_contacts',
//         JSON.stringify(this.state.contacts)
//       );
//     }
//   }
//   addContact = ({ name, number }) => {
//     if (this.isDuplicate(name)) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     const newContact = {
//       id: Date.now().toString(),
//       name,
//       number
//     };
//     this.setState(({ contacts }) => ({
//       contacts: [...contacts, newContact]
//     }));
//   };
//   isDuplicate(name) {
//     return this.state.contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//   }
//   handleFilterChange = event => {
//     this.setState({ filter: event.target.value });
//   };
//   deleteContact = id => {
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter(contact => contact.id !== id)
//     }));
//   };
//   getVisibleContacts() {
//     const { contacts, filter } = this.state;
//     const normFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normFilter)
//     );
//   }
//   render() {
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <Container>
//         <Title>Phonebook</Title>
//         <ContactForm onSubmit={this.addContact} />
//         <SubTitle>Contacts</SubTitle>
//         <Filter
//           value={this.state.filter}
//           onChange={this.handleFilterChange}
//         />
//         <ContactList
//           contacts={visibleContacts}
//           onDelete={this.deleteContact}
//         />
//       </Container>
//     );
//   }
// }

export default App;