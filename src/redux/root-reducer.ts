import { combineReducers } from 'redux';

import userReducer from './user';
// import cartReducer from './cart';
import { cartReducer } from './cart/slice';

export const rootReducer = combineReducers({ userReducer, cartReducer });
