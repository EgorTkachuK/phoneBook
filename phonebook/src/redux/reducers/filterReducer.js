/*


import { SET_FILTER } from '../actions.js';

const initialState = '';

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}

*/


/*

import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from '../actions.js';

const initialState = '';

const filterReducer = createReducer(initialState, (builder) => {
  builder.addCase(setFilter, (state, action) => action.payload);
});

export default filterReducer;

*/

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
