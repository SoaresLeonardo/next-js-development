import { RootState } from '../types';

export const selectProductsTotalPrice = (rootReducer: RootState) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.price * (curr.quantity ?? 0),
    0
  );
};
