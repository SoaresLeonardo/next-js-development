import { createContext, useCallback, useContext, useState } from 'react';
import { IProductsContext, Products, ProductsProviderProps } from './types';

const ProductsContext = createContext<IProductsContext>({} as IProductsContext);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Products[]>([]);

  const addProduct = useCallback(() => {
    const newProduct = {
      id: products.length + 1,
      name: `Produto ${products.length}`,
      price: products.length
    };
    setProducts((products) => [...products, newProduct]);
  }, [products]);

  const removeProduct = useCallback(
    (productId: number) => {
      const newProduct = products.filter((product) => product.id !== productId);

      setProducts(newProduct);
    },
    [products]
  );

  return (
    <ProductsContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
