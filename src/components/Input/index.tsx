import {
  InputHTMLAttributes,
  forwardRef,
  useCallback,
  useId,
  useState
} from 'react';

import * as S from './styles';
import ErrorText from '../ErrorText';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

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
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const typeVisible = isVisiblePassword ? 'text' : 'password';
  const typeChangePassword = type === 'password' ? typeVisible : type;

  const handleVisiblePassword = useCallback(() => {
    setIsVisiblePassword((state) => !state);
  }, []);
  return (
    <>
      {label && <S.Label htmlFor={labelId}>{label}</S.Label>}
      <S.Container error={error}>
        {startAdorment && <S.Adorment>{startAdorment}</S.Adorment>}
        <S.Input
          ref={ref}
          id={labelId}
          type={typeChangePassword}
          name={name}
          {...rest}
        />
        {type === 'password' && (
          <S.ButtonVisiblePassword onClick={handleVisiblePassword}>
            {isVisiblePassword ? <MdVisibilityOff /> : <MdVisibility />}
          </S.ButtonVisiblePassword>
        )}
        {endAdorment && <S.Adorment>{endAdorment}</S.Adorment>}
      </S.Container>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default forwardRef(Input);
