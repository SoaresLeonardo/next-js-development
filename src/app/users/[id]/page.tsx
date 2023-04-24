import UserService from '@/services/http/user';

const userService = new UserService();

interface ParamsProps {
  params: {
    id: number;
  };
}

interface UserData {
  id: number;
  name: string;
}

const getData = async (id: number): Promise<UserData> => {
  const response = await userService.getById(id);

  return response as UserData;
};

export default async function UserById({ params }: ParamsProps) {
  const id = params.id;

  const userById = await getData(id);

  return (
    <>
      <h1>User info</h1>
      <p>{id}</p>
      <p>User name: {userById.name}</p>
    </>
  );
}
