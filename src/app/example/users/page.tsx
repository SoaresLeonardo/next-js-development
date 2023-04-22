'use client';

import { useRouter } from 'next/navigation';

export default function Users() {
  const { push } = useRouter();

  const users = [
    {
      id: 1,
      name: 'Junior',
      age: 26
    },
    {
      id: 2,
      name: 'Leonardo',
      age: 26
    },
    {
      id: 3,
      name: 'Lucas',
      age: 26
    }
  ];

  const handleUserById = (id: number) => {
    push(`/dashboard/users/${id}`);
  };

  return (
    <>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id} onClick={() => handleUserById(user.id)}>
          <p>Name: {user.name}</p>
        </div>
      ))}
    </>
  );
}
