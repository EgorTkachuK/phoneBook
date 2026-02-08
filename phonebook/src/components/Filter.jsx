import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions.js';
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
function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={handleChange}
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