'use client';

import Header from '@/components/Header';
import Products from '@/components/products';
import Link from 'next/link';

import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function ProductsPage() {
  return (
    <>
      <Header
        title="Shopping cart"
        hasLogin
        textLoginAction="Login"
        icon={() => (
          <Link href="/cart">
            <AiOutlineShoppingCart />
          </Link>
        )}
      />
      <Products />
    </>
  );
}
