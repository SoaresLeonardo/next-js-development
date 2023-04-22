import { Skeleton } from '@/components/Skeleton';

export default function Example() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      Example
      <Skeleton />
    </div>
  );
}
