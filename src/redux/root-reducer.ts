import { combineReducers } from 'redux';

import userReducer from './user';
import cartReducer from './cart';

export const rootReducer = combineReducers({ userReducer, cartReducer });
