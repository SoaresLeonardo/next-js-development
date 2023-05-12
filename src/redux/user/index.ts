const initialState = {
  currentUser: null
};

type LoginPayload = {
  name: string;
  email: string;
};

type State = {
  currentUser: null;
};

type Action = {
  type: 'user/login' | 'user/logout';
  payload: LoginPayload;
};

type UserReducerProps<S, A> = (state: S, action: A) => void;

const userReducer: UserReducerProps<State, Action> = (
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
        currentUser: state.currentUser === null
      };

    default:
      return state;
  }
};

export default userReducer;
