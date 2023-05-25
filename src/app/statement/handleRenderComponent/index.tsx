const Admin = () => {
  return (
    <>
      <h1>Admin</h1>
    </>
  );
};

const User = () => {
  return (
    <>
      <h1>User</h1>
    </>
  );
};

export type ComponentProps = 'admin' | 'user';

export const handleRenderComponent = (userType: ComponentProps) => {
  const components = {
    user: <User />,
    admin: <Admin />
  };

  return components[userType] ?? null;
};

// if (userType === 'admin') {
//   return <Admin />;
// }
// if (userType === 'user') {
//   return <User />;
// }

// return <></>;
