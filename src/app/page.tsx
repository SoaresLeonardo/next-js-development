'use client';

import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import * as C from '@/components/Container';
import { decrement, increment } from '@/redux/counter';

export default function Home() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrementCounter = () => {
    dispatch(increment());
  };

  const handleDecrementCounter = () => {
    dispatch(decrement());
  };

  return (
    <>
      <C.Container backgroundColor>
        <h1>Counter {counter}</h1>
        <Button onClick={handleIncrementCounter}>Incrementar</Button>
        <Button onClick={handleDecrementCounter}>Decrementar</Button>
      </C.Container>
    </>
  );
}
