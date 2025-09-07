import React, { Component } from 'react';
import styled from 'styled-components';

const DelteButton = styled.button`
color: #000;
width:  200px;
height: 30px;
border-radius: 15px;
font-weight: bold;
padding-left: 20px;
font-size: 16px;
font-style: italic;
margin-left: 20px;

border : 5px solid #FF0000;
 cursor: pointer;

`;
const Item = styled.li`
color: #fff;
font-size: 26px;
font-style: italic;
font-weight: bold;
margin-right: 20px;
`;
class ContactListItem extends Component {
  render() {
    const { id, name, number, onDelete } = this.props;
    return (
      <Item>
        {name}: {number}
        <DelteButton onClick={() => onDelete(id)}>Delete</DelteButton>
      </Item>
    );
  }
}

export default ContactListItem;
