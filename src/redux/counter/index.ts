import { createSlice, configureStore } from '@reduxjs/toolkit';

type StateProps = {
  value: number;
};

const initialState: StateProps = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
