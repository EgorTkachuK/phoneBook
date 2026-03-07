/*


import { ADD_CONTACT, DELETE_CONTACT } from '../actions.js';

const initialState = [];

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(c => c.id !== action.payload);
    default:
      return state;
  }
}

*/


import { createReducer } from '@reduxjs/toolkit';

const initialState = [];

const contactsReducer = createReducer(initialState, {
  ADD_CONTACT: (state, action) => {
    state.push(action.payload);
  },
  DELETE_CONTACT: (state, action) => {
    return state.filter(c => c.id !== action.payload);
  }
});

export default contactsReducer;
