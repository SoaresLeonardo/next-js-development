'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type UserProps = {
  name: string;
  address: string;
  cell: number;
};

type UserFormProps = {
  id?: number;
  defaultValues?: {
    name: string;
    address: string;
    cell: number;
  };
};

const UserForm = ({ id, defaultValues }: UserFormProps) => {
  const { handleSubmit, register } = useForm({
    defaultValues: defaultValues ?? {}
  });

  const handleSubmitData = (data: UserProps) => {
    console.log(data);
  };
  return (
    <>
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <form
        onSubmit={handleSubmit(handleSubmitData)}
        style={{
          gap: '10px',
          display: 'flex',
          flexDirection: 'column',
          margin: '20px auto',
          maxWidth: '260px'
        }}
      >
        <input type="text" placeholder="name" {...register('name')} />
        <input type="text" placeholder="Address" {...register('address')} />
        <input type="text" placeholder="Telefone" {...register('cell')} />
        <button type="submit">{id ? 'Salvar' : 'Adicionar'}</button>
      </form>
    </>
  );
};

export default function Form() {
  const [isAddUser, setIsAddUser] = useState(false);
  const [isEditUser, setIsEditUser] = useState(false);

  const defaultValues = {
    name: 'Leonardo',
    address: 'Rua 1',
    cell: 999999
  };

  const handleAddUser = () => {
    setIsEditUser(false);
    setIsAddUser(true);
  };

  const handleEditUser = () => {
    setIsEditUser(true);
    setIsAddUser(false);
  };

  return (
    <>
      <h1 className="font-bold">Form</h1>
      <button onClick={handleAddUser}>Adicionar</button>
      <button onClick={handleEditUser}>Editar</button>

      {isAddUser && <UserForm />}
      {isEditUser && <UserForm id={1} defaultValues={defaultValues} />}
    </>
  );
}
