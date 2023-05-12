/* eslint-disable no-case-declarations */
import { Actions, CartReducerProps, State } from './types';

const initialState = {
  products: []
};

const cartReducer: CartReducerProps<State, Actions> = (
  state = initialState,
  actions
) => {
  switch (actions.type) {
    case 'product/add':
      // Verifica se o produto já existe dentro do carrinho
      const productAlreadyExists = state.products.some(
        (product) => product.id === actions.payload.id
      );

      if (productAlreadyExists) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === actions.payload.id
              ? { ...product, quantity: (product.quantity ?? 0) + 1 }
              : product
          )
        };
      }

      return {
        ...state,
        products: [...state.products, { ...actions.payload, quantity: 1 }]
      };

    case 'product/increment':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === actions.payload.id
            ? { ...product, quantity: (product.quantity ?? 0) + 1 }
            : product
        )
      };

    case 'product/decrement':
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === actions.payload.id
              ? { ...product, quantity: (product.quantity ?? 0) - 1 }
              : product
          )
          .filter((product) => (product.quantity ?? 0) > 0)
      };

    case 'product/remove':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== actions.payload.id
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
