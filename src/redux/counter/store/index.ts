import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../splice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
