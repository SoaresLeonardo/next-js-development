'use client';

import * as S from '@/components/Container';
import Input from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z
  .object({
    cpf: z
      .string()
      .min(14, 'Por favor, Insira um CPF válido')
      .max(14, 'Por favor, Insira um CPF válido'),
    cnpj: z.string(),
    email: z.string().email('Por favor, Insira um Email válido'),
    hasCnpj: z.boolean(),
    firstName: z.string().min(4, 'O nome deve ter no minimo 4 caracteres'),
    lastName: z.string().min(4, 'O sobre nome deve ter no minimo 4 caracteres')
  })
  .superRefine((values, context) => {
    if (values.hasCnpj && values.cnpj.length < 18) {
      context.addIssue({
        path: ['cnpj'],
        code: z.ZodIssueCode.too_small,
        minimum: 18,
        type: 'string',
        inclusive: true,
        message: 'Por favor, Insira um CNPJ válido'
      });
    }
  })
  .transform((fields) => ({
    cpf: fields.cpf,
    firstName: fields.firstName,
    lastName: fields.lastName,
    cnpj: fields.hasCnpj ? fields.cnpj : '',
    hasCnpj: fields.hasCnpj,
    email: fields.email
  }));

type FormProps = z.infer<typeof schema>;

export default function Validation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      cpf: '',
      cnpj: '',
      email: '',
      firstName: '',
      lastName: '',
      hasCnpj: false
    }
  });
  console.log(errors);
  const handleSubmitForm = (e: FormProps) => {
    console.log(e);
  };

  const hasCnpj = watch('hasCnpj');

  return (
    <S.Container>
      <h1>Validation Form</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          {...register('cpf')}
          placeholder="Inserir CPF"
          label="CPF"
          error={errors.cpf?.message}
        />

        <Input type="checkbox" label="hasCnpj" {...register('hasCnpj')} />

        {hasCnpj && (
          <Input
            {...register('cnpj')}
            placeholder="Inserir CNPJ"
            label="CNPJ"
            error={errors.cnpj?.message}
          />
        )}

        <Input
          {...register('email')}
          placeholder="Inserir E-mail"
          label="E-mail"
          error={errors.email?.message}
        />

        <Input
          {...register('firstName')}
          placeholder="Inserir seu primeiro nome"
          label="FirstName"
          error={errors.firstName?.message}
        />

        <Input
          {...register('lastName')}
          placeholder="Inserir seu sobre nome"
          label="LastName"
          error={errors.lastName?.message}
        />

        <button type="submit">Enviar</button>
      </form>
    </S.Container>
  );
}
