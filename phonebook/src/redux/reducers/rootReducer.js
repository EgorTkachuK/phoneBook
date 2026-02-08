import { combineReducers } from 'redux';
import contacts from './contactsReducer.js';
import filter from './filterReducer.js';

export default combineReducers({ contacts, filter });
