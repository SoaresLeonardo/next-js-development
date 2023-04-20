import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type ActiveLinkProps = {
  children: ReactNode;
} & LinkProps;

const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname();

  const isCurrentPath =
    pathname === href ||
    pathname === rest.as ||
    pathname?.startsWith(String(rest.as));

  return (
    <Link
      {...rest}
      href={href}
      style={{
        backgroundColor: `${isCurrentPath ? 'blue' : 'transparent'}`,
        padding: '4px',
        color: `${isCurrentPath ? 'white' : 'black'}`,
        borderRadius: '5px'
      }}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
