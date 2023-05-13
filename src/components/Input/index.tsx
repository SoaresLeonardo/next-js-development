import { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './styles';
import ErrorText from '../ErrorText';

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
      <S.Container>
        <S.IconContainer isErrored={error}>
          <input ref={ref} {...rest} />
        </S.IconContainer>
        {error && <ErrorText>{helperText}</ErrorText>}
      </S.Container>
    </>
  );
};

export default forwardRef(Input);
