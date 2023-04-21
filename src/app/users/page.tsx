import { assertion } from '@/functions/asserts/assertion';
import { PeopleService } from '@/services/http/user';

const getUsers = async () => {
  const response = await PeopleService.getAll();

  return response;
};

export default async function Users() {
  const users = await getUsers();

  assertion(Array.isArray(users), 'Erro no retorno da api');

  return (
    <>
      <h1 className="font-bold">Users</h1>
      {users?.map((user) => (
        <div key={user.cell}>{user.name.first}</div>
      ))}
    </>
  );
}
