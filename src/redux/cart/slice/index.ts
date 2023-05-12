import { createSlice } from '@reduxjs/toolkit';

type ProductProps = {
  name: string;
  id: string;
  imageUrl: string;
  price: number;
  quantity?: number;
};

type CartState = {
  products: ProductProps[];
};

const initialState: CartState = {
  products: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productAlreadyExists = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productAlreadyExists) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: (product.quantity ?? 0) + 1 }
            : product
        );

        return;
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },

    incrementQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: (product.quantity ?? 0) + 1 }
          : product
      );
    },

    decrementQuantity: (state, action) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: (product.quantity ?? 0) - 1 }
            : product
        )
        .filter((product) => (product.quantity ?? 0) > 0);
    }
  }
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
