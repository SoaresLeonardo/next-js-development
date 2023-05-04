import * as C from '@/components/Container';
// import { useUsers } from '@/context/users';
import { useUsersStore } from '@/store/users';

export const Users = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { users, addUser, removeUser } = useUsers();

  const {
    state: { users },
    actions: { addUser, removeUser }
  } = useUsersStore();

  const user = { address: 'Rua 1', id: 1, name: 'Leonardo' };
  return (
    <C.Container>
      <h1>Users</h1>

      <button onClick={() => addUser(user)}>Add</button>
      <button onClick={() => removeUser(1)}>Remove</button>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </C.Container>
  );
};
