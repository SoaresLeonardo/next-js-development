import { CardLink } from '@/components/Card/CardLink';

export const metadata = {
  title: 'Links'
};

export default function Links() {
  return (
    <>
      <CardLink href="/example">Example</CardLink>
      <CardLink href="/form">Form</CardLink>
      <CardLink href="/users">Users</CardLink>
      <CardLink href="/products">Products</CardLink>
    </>
  );
}
