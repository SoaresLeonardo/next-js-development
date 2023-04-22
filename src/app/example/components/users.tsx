type FunctionProps = {
  id: number;
  name: string;
};

const asyncFunction = async (): Promise<FunctionProps[]> => {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'leonardo' },
        { id: 2, name: 'henrique' }
      ]);
    }, 3000);
  });
  return myPromise as Promise<FunctionProps[]>;
};

export default async function Users() {
  const users = await asyncFunction();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '10rem',
        height: '10rem',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: '#ddd'
      }}
    >
      Products Paraller
      {users.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
