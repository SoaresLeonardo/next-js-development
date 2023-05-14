import { createStore } from 'redux';

export type StateProps = {
  counter: {
    value: number;
  };
};

type ActionProps = {
  type: 'counter/increment' | 'counter/decrement';
};

type CounterReducerProps<S, A> = (state: S | undefined, action: A) => S;
const initialState: StateProps = {
  counter: {
    value: 0
  }
};

export const counterReducer: CounterReducerProps<StateProps, ActionProps> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'counter/increment':
      return {
        counter: { value: state.counter.value + 1 }
      };

    case 'counter/decrement':
      return {
        counter: { value: state.counter.value - 1 }
      };

    default:
      return state;
  }
};

export const store = createStore(counterReducer);
