'use client';

import products from '@/services/data/products';

import Header from '@/components/Header';
import Products from '@/components/Products';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <>
      <Header title="Shopping cart" cart={<Link href="/cart">Cart</Link>} />

      <Products products={products} />
    </>
  );
}
