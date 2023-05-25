import { create } from 'zustand';

type ProductProps = {
  id: number;
  name: string;
  price: number;
};

type ActionsProps = {
  addProduct: () => void;
  removeProduct: (productId: number) => void;
};

type StoreProps = {
  state: {
    products: ProductProps[];
  };

  actions: ActionsProps;
};

export const useProductStore = create<StoreProps>((set) => ({
  state: {
    products: []
  },
  actions: {
    addProduct: () =>
      set((state) => ({
        state: {
          products: [
            ...state.state.products,
            {
              id: state.state.products.length,
              name: `Produto ${state.state.products.length}`,
              price: state.state.products.length
            }
          ]
        }
      })),
    removeProduct: (productId) =>
      set((state) => ({
        state: {
          products: state.state.products.filter(
            (product) => product.id !== productId
          )
        }
      }))
  }
}));
