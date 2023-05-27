'use client';

import Header from '@/components/Header';

const Profile = ({ name }: { name: string }) => {
  return <>{name}</>;
};

const HeaderPage = () => {
  return <Header profile={<Profile name="leonardo" />} />;
};

export default function DependencyInjection() {
  return (
    <>
      <HeaderPage />
      <h1>Dependencia</h1>
    </>
  );
}
