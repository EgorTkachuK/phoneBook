import React from 'react';
import styled from 'styled-components';
import ContactListItem from './ContactListItem';

const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 10px;
`;

// HOOKS
function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
}

// CLASS
// class ContactList extends React.Component {
//   render() {
//     return (
//       <List>
//         {this.props.contacts.map(({ id, name, number }) => (
//           <ContactListItem
//             key={id}
//             id={id}
//             name={name}
//             number={number}
//             onDelete={this.props.onDelete}
//           />
//         ))}
//       </List>
//     );
//   }
// }

export default ContactList;