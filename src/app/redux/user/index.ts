import { createStore } from 'redux';

type UserProps = {
  name: string;
  email: string;
};

export type StateProps = {
  currentUser: null | UserProps;
};

type ActionsProps = {
  type: 'user/login' | 'user/logout';
  payload: UserProps;
};

const initialState: StateProps = {
  currentUser: null
};

type UserReducerProps<S, A> = (state: S | undefined, action: A) => S;

export const userReducer: UserReducerProps<StateProps, ActionsProps> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'user/login':
      return {
        ...state,
        currentUser: action.payload
      };

    case 'user/logout':
      return {
        ...state,
        currentUser: null
      };

    default:
      return state;
  }
};

export const store = createStore(userReducer);
