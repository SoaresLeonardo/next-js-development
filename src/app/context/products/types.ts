import { ReactNode } from 'react';

export type ProductsProviderProps = {
  children: ReactNode;
};

export type Products = {
  id: number;
  name: string;
  price: number;
};

export type IProductsContext = {
  products: Products[];
  addProduct: () => void;
  removeProduct: (productId: number) => void;
};
