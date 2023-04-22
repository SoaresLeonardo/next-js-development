import Products from './components/products';
import Users from './components/users';

export default function Example() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      Example
      {/* @ts-expect-error Async Server Component */}
      <Products />
      {/* @ts-expect-error Async Server Component */}
      <Users />
    </div>
  );
}
