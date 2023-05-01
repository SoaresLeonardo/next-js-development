'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '@/components/Container';

import { z, ZodError } from 'zod';
import Input from '@/components/Input';

const schema = z
  .object({
    password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres'),
    confirmPassword: z.string(),
    url: z.string().url('Por favor informe uma URL válida'),
    email: z.string().email('E-mail inválido'),
    qtd: z
      .number({
        errorMap: () => {
          return { message: 'Informe um número válido' };
        }
      })
      .positive('Por favor informe um número maior que 0'),
    role: z.enum(['admin', 'user'], {
      errorMap: () => {
        return { message: `Informe 'admin' ou 'user'` };
      }
    })
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas precisam ser iguais'
  })
  .transform((fields) => ({
    password: fields.password.toLocaleUpperCase(),
    confirmPassword: fields.confirmPassword.toLocaleUpperCase(),
    qtd: fields.qtd,
    email: fields.email.toLocaleLowerCase(),
    role: fields.role,
    url: fields.url.toLocaleLowerCase()
  }));

type FormProps = z.infer<typeof schema>;

export default function AdvancedForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema)
  });

  console.log(errors);

  const handleForm = (data: FormProps) => {
    console.log({ data });

    try {
      const result = schema.parse(data);

      console.log(result);
    } catch (err) {
      if (err instanceof ZodError) {
        console.error(err.flatten());
      }
    }
  };
  return (
    <S.Container>
      <h1>Advanced Forms</h1>
      <form className="space-y-6" onSubmit={handleSubmit(handleForm)}>
        <Input
          {...register('password')}
          placeholder="Insira sua senha"
          error={!!errors.password?.message}
          helperText={errors.password?.message}
        />

        <Input
          {...register('confirmPassword')}
          placeholder="Confirme sua senha"
          error={!!errors.confirmPassword?.message}
          helperText={errors.confirmPassword?.message}
        />

        <Input
          {...register('email')}
          placeholder="Insira seu E-mail"
          error={!!errors.email?.message}
          helperText={errors.email?.message}
        />

        <Input
          {...register('qtd', {
            setValueAs: (value: string) => parseInt(value, 10)
          })}
          placeholder="Insira uma quantidade"
          error={!!errors.qtd?.message}
          helperText={errors.qtd?.message}
        />

        <Input
          {...register('url')}
          placeholder="Insira uma URL"
          error={!!errors.url?.message}
          helperText={errors.url?.message}
        />

        <Input
          {...register('role')}
          placeholder="Informe um user"
          error={!!errors.role?.message}
          helperText={errors.role?.message}
        />

        <div>
          <button type="submit" className="bg-blue-500 text-white w-full p-3">
            Enviar
          </button>
        </div>
      </form>
    </S.Container>
  );
}
