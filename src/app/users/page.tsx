import UserService from '@/services/http/user';

const userService = new UserService();

const getUsers = async () => {
  const response = await userService.getAll();

  return response;
};

export default async function Users() {
  const users = await getUsers();

  return (
    <>
      <h1>Users</h1>
      {users?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}
