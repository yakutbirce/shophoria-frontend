

import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import logger from 'redux-logger';

import userReducer from './userSlice';


import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  user: userReducer,           
  client: clientReducer,       
  product: productReducer,     
  cart: cartReducer,          
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
