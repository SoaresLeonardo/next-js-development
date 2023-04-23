'use client';

import { useState } from 'react';

export default function Example() {
  const [message, setMessage] = useState('Message test');
  return (
    <div>
      <h1>Hello world</h1>
      <p>Example</p>
      <p>{message}</p>
      <button onClick={() => setMessage('New message')}>Change message</button>
    </div>
  );
}
