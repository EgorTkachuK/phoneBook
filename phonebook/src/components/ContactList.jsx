import React, { Component } from 'react';
import styled from 'styled-components';
import ContactListItem from './ContactListItem';

const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 10px;
`;

class ContactList extends Component {
  render() {
    return (
      <List>
        {this.props.contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={this.props.onDelete}
          />
        ))}
      </List>
    );
  }
}

export default ContactList;
