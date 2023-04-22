import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z, ZodError } from 'zod';

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
    <>
      <h1 className="font-bold text-purple-500 text-4xl">Advanced forms</h1>
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
                <p className="text-red-500 font-bold">
                  {errors.password?.message}
                </p>
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
                <p className="text-red-500 font-bold">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="email"
                placeholder="Insira seu e-mail"
                {...register('email')}
              />

              {errors.email?.message && (
                <p className="text-red-500 font-bold">
                  {errors.email?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="number"
                placeholder="Informe a quantidade"
                {...register('qtd', {
                  setValueAs: (value: string) => parseInt(value, 10)
                })}
              />

              {errors.qtd?.message && (
                <p className="text-red-500 font-bold">{errors.qtd.message}</p>
              )}
            </div>
          </div>

          <div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                placeholder="informe a URL"
                {...register('url')}
              />
              {errors.url?.message && (
                <p className="text-red-500 font-bold">{errors.url?.message}</p>
              )}
            </div>
          </div>

          <div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                placeholder="informe a permissão"
                {...register('role')}
              />

              {errors.role?.message && (
                <p className="text-red-500 font-bold">{errors.role?.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
