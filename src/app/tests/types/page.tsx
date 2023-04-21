'use client';

import { useState } from 'react';

const data = [
  { id: 1, name: 'Lucas', age: 16 },
  { id: 2, name: 'Leonardo', age: 15 },
  { id: 3, name: 'Maria', age: 16 }
];

type PeopleProps = {
  id: number;
  name: string;
  age: number;
};

export default function TypePage() {
  // const [name, setName] = useState('');
  // const [number, setBoolean] = useState(false);

  // ===================

  // const [userId, setUserId] = useState<number | null>(null);

  const [rowSelected, setRowSelected] = useState<PeopleProps | null>(null);

  const handleRowSelected = (data: PeopleProps) => {
    console.log(data);
    setRowSelected(data);
  };

  return (
    <>
      <h1 className="font-bold">Type</h1>

      <h2>{rowSelected?.name}</h2>

      {data.map((people) => (
        <div
          key={people.id}
          style={{ cursor: 'pointer' }}
          onClick={() => handleRowSelected(people)}
        >
          name: {people.name} - age: {people.age}
        </div>
      ))}
    </>
  );
}
