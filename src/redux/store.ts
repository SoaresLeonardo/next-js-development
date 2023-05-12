// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

// const store = createStore(rootReducer);
const store = configureStore({
  reducer: rootReducer
});
export default store;
