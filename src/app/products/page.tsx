'use client';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import Products from '@/components/Products';

import Header from '@/components/Header';
export default function ProductsPage() {
  return (
    <>
      <Header
        title="Shopping cart"
        hasLogin
        icon={() => <AiOutlineShoppingCart />}
      />
      <Products />
    </>
  );
}
