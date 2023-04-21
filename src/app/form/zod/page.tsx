'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z
  .object({
    password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres'),
    confirmPassword: z.string()
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas precisam ser iguais'
  });

type FormProps = z.infer<typeof schema>;

export default function FormZod() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    resolver: zodResolver(schema)
  });

  console.log('errors', errors);

  const handleForm = (data: FormProps) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Zod
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handleForm)}>
            <div>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="password"
                  placeholder="Insira sua senha"
                  {...register('password')}
                />

                {errors.password?.message && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="password"
                  placeholder="Confirme sua senha"
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword?.message && (
                  <p className="text-red-600">
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
