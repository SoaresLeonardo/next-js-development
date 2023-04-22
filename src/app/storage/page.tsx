'use client';

import { getStorageItem, setStorageItem } from '@/utils/LocalStorage';
import { useState } from 'react';

export default function Storage() {
  const [data, setData] = useState();

  function handleGetLocalStorage() {
    const item = getStorageItem('item_key');
    setData(item);
  }
  function handleSetLocalStorage() {
    setStorageItem('item_key', 'leonardo');
  }

  return (
    <div>
      <h1 className="font-bold">Storage</h1>

      <p>{data}</p>

      <button onClick={handleSetLocalStorage}>SET</button>
      <button onClick={handleGetLocalStorage}>GET</button>
    </div>
  );
}
