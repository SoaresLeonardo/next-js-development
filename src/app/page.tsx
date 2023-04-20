import { PeopleService } from '@/services/http/user';

const getUsers = async () => {
  const response = await PeopleService.getAll();

  return response;
};

export default async function Home() {
  const users = await getUsers();

  return (
    <>
      <h1 className="font-bold">Home</h1>
      {users?.map((user) => (
        <div key={user.cell}>{user.name.first}</div>
      ))}
    </>
  );
}
