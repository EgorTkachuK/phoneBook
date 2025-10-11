import React from 'react';
import styled from 'styled-components';
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

// HOOKS
function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </Label>
  );
}

//  CLASS 
// class Filter extends React.Component {
//   render() {
//     return (
//       <Label>
//         Find contacts by name
//         <Input
//           type="text"
//           name="filter"
//           value={this.props.value}
//           onChange={this.props.onChange}
//         />
//       </Label>
//     );
//   }
// }

export default Filter;