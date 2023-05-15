'use client';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import Products from '@/components/Products';

import Header from '@/components/Header';
import { useSelector } from 'react-redux';
import { State } from '@/redux/products/types';
import Link from 'next/link';

export default function ProductsPage() {
  const products = useSelector((state: State) => state.products);

  console.log(products);
  return (
    <>
      <Header
        title="Shopping cart"
        hasLogin
        icon={() => (
          <Link href="cart">
            <AiOutlineShoppingCart />
          </Link>
        )}
      />
      <Products />
    </>
  );
}
