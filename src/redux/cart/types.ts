export type ProductProps = {
  name: string;
  imageUrl: string;
  price: number;
  id: string;
  quantity?: number;
};

export type State = {
  products: ProductProps[];
};

export type Actions = {
  type:
    | 'product/add'
    | 'product/remove'
    | 'product/increment'
    | 'product/decrement';
  payload: ProductProps;
};

export type CartReducerProps<S, A> = (state: State, action: A) => S;

export type PayloadProps = {
  payload: ProductProps;
};

export type CartItemProps = {
  product: ProductProps;
};

export type RootState = {
  cartReducer: State;
};
