import { InputHTMLAttributes, forwardRef, useId } from 'react';

import * as S from './styles';
import ErrorText from '../ErrorText';

export type Props = {
  label?: string;
  error?: string;
  startAdorment?: React.ReactNode;
  endAdorment?: React.ReactNode;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    error,
    type = 'text',
    label = '',
    startAdorment,
    endAdorment,
    ...rest
  }: InputProps,
  ref
) => {
  const labelId = useId();
  return (
    <>
      {label && <S.Label htmlFor={labelId}>{label}</S.Label>}
      <S.Container error={error}>
        {startAdorment && <S.Adorment>{startAdorment}</S.Adorment>}
        <S.Input id={labelId} ref={ref} {...rest} type={type} name={name} />
        {endAdorment && <S.Adorment>{endAdorment}</S.Adorment>}
      </S.Container>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default forwardRef(Input);
