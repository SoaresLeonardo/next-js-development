'use client';

import { useForm } from 'react-hook-form';

import * as S from '@/components/Container';

import Input from '@/components/Input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z
  .object({
    cpf: z
      .string()
      .min(14, 'Por favor, informe um CPF válido')
      .max(14, 'Por favor, informe um CPF válido'),

    hasCnpj: z.boolean(),
    cnpj: z.string()
  })
  .superRefine((values, context) => {
    if (values.hasCnpj && values.cnpj.length < 18) {
      context.addIssue({
        path: ['cnpj'],
        code: z.ZodIssueCode.too_small,
        minimum: 18,
        type: 'string',
        inclusive: true,
        message: 'Por favor, informe um CNPJ válido'
      });
    }
  })
  .transform((fields) => ({
    cpf: fields.cpf,
    hasCnpj: fields.hasCnpj,
    cnpj: fields.hasCnpj ? fields.cnpj : ''
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
      hasCnpj: false,
      cnpj: ''
    }
  });

  console.log(errors);

  const handleSubmitForm = (data: FormProps) => {
    console.log(data);
  };

  const hasCnpj = watch('hasCnpj');

  return (
    <S.Container>
      <div>
        <h1>Validation</h1>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            {...register('cpf')}
            placeholder="Insira seu CPF"
            label="CPF"
            error={errors.cpf?.message}
          />
          <Input
            {...register('hasCnpj')}
            type="checkbox"
            id="hasCnpj"
            label="Tem CNPJ?"
          />
          {hasCnpj && (
            <Input
              {...register('cnpj')}
              placeholder="Insira seu CNPJ"
              label="CNPJ"
              error={errors.cnpj?.message}
            />
          )}
          <button type="submit">Enviar</button>
        </form>
      </div>
    </S.Container>
  );
}
