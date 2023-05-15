export type Products = {
  name: string;
  id: string;
  imageUrl: string;
  price: number;
};

export type State = {
  products: Products[];
};

export type Action = {
  type: 'cart/add' | 'cart/remove';
  payload: Products;
};

export type ProductsReducer<S, A> = (state: S | undefined, action: A) => S;
