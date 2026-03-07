/*

import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import rootReducer from './reducers/rootReducer.js';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

export default store;

*/

// Redux Toolkit store (configureStore) - plain usage without slices
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer.js';

export const store = configureStore({ reducer: rootReducer });

export default store;
