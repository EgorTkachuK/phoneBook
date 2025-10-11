import React, { useState } from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
background-color: #fff;
border-radius: 15px;
width:  150px;
height: 40px;
text-transform: uppercase;
font-weight: bold;
font-size: 16px;
font-style: italic;
border : 5px solid #008000;
cursor: pointer;
`;
const Input = styled.input`
color: #000;
width:  200px;
height: 30px;
border-radius: 15px;
font-weight: bold;
padding-left: 20px;
font-size: 16px;
font-style: italic;
margin-left: 20px;
border : 5px solid yellow;
`;
const Label = styled.label`
color: #fff;
font-size: 36px;
font-style: italic;
font-weight: bold;
margin-right: 20px;
`;

//  HOOKS 
function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </form>
  );
}

//  CLASS
// class ContactForm extends React.Component {
//   state = {
//     name: '',
//     number: ''
//   };
//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Label>
//           Name
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces."
//             value={name}
//             onChange={this.handleChange}
//             required
//           />
//         </Label>
//         <Label>
//           Number
//           <Input
//             type="number"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             value={number}
//             onChange={this.handleChange}
//             required
//           />
//         </Label>
//         <SubmitButton type="submit">Add contact</SubmitButton>
//       </form>
//     );
//   }
// }

export default ContactForm;