/*

import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import rootReducer from './reducers/rootReducer.js';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

export default store;

*/


import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer.js';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(),
);

export const persistor = persistStore(store);

export default store;
