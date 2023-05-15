import { createStore } from 'redux';
import { Action, ProductsReducer, State } from './types';

const initialState: State = {
  products: []
};

export const productsReducer: ProductsReducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'cart/add':
      return {
        ...state,
        products: [...state.products, { ...action.payload }]
      };

    default:
      return state;
  }
};

export const store = createStore(productsReducer);
