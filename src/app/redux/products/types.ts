export type Product = {
  name: string;
  id: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

export type State = {
  products: Product[];
};

export type Action = {
  type: 'cart/add' | 'cart/remove' | 'cart/increment' | 'cart/decrement';
  payload: Product;
};

export type ProductsReducer<S, A> = (state: S | undefined, action: A) => S;
