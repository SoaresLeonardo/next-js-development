'use client';

import Header from '@/components/Header';

import { AiOutlineHome } from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <Header hasLinks logoIcon={<AiOutlineHome />} />
      <h1>Home</h1>
    </>
  );
}
