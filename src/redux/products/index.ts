/* eslint-disable no-case-declarations */
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
      const productExists = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productExists) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        };
      }

      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }]
      };

    case 'cart/remove':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        )
      };

    case 'cart/increment':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      };

    case 'cart/decrement':
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0)
      };

    default:
      return state;
  }
};

export const store = createStore(productsReducer);
