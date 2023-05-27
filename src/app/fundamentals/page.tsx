'use client';

import { useState } from 'react';

// 3 Pilares React.js
// Components
// Props
// State(Estados)

// Jsx || Tsx

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button>{children}</button>;
};

export default function Fundamentals() {
  const [input, setInput] = useState('');
  console.log(input);
  return (
    <div>
      <h1>Fundamentals: {input}</h1>
      <input
        type="text"
        placeholder="Informe seu nome"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button>Button 1</Button>
    </div>
  );
}
