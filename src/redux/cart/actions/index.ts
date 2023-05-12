import { PayloadProps } from '../types';

export const addProductToCart = ({ payload }: PayloadProps) => ({
  type: 'product/add',
  payload
});

export const incrementNewAmount = ({ payload }: PayloadProps) => ({
  type: 'product/increment',
  payload
});

export const decrementAmount = ({ payload }: PayloadProps) => ({
  type: 'product/decrement',
  payload
});

export const removeProductToCart = ({ payload }: PayloadProps) => ({
  type: 'product/remove',
  payload
});
