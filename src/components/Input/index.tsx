import { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = {
  error?: boolean;
  helperText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error = false, helperText = '', ...rest }: InputProps,
  ref
) => {
  return (
    <>
      <input
        style={error ? { border: '1px solid red' } : {}}
        className="w-full border border-gray-200 shadow text-sm p-3 mt-3"
        ref={ref}
        {...rest}
      />
      {error && <span className="text-red-500">{helperText}</span>}
    </>
  );
};

export default forwardRef(Input);
