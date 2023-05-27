'use client';

import * as S from '@/components/Container';
import Input from '@/components/Input';
import { UserService } from '@/services/http/login';
import { useForm } from 'react-hook-form';

const useLogin = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      login: '',
      password: ''
    }
  });

  const handleData = async (data: any) => {
    await UserService.login({
      login: data.login,
      password: data.password
    });
  };

  return {
    handleSubmit,
    register,
    handleData
  };
};

export default function Example() {
  const { handleData, handleSubmit, register } = useLogin();
  return (
    <S.Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleData)}>
        <Input
          {...register('login')}
          placeholder="Insira email ou telefone"
          label="E-mail ou telefone"
        />
        <Input
          {...register('password')}
          placeholder="Insira sua senha"
          label="Senha"
          type="password"
        />
        <button type="submit">Enviar</button>
      </form>
    </S.Container>
  );
}
