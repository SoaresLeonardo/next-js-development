interface ParamsProps {
  params: {
    id: string;
  };
}

export default function UsersById({ params }: ParamsProps) {
  const userId = params.id;
  return (
    <>
      <h1>UsersById</h1>
      <p>Id: {userId}</p>
    </>
  );
}
