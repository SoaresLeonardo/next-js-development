type UserProps = {
  name: string;
  email: string;
};

type UserLogin = {
  payload: UserProps;
};

export const userLogin = (payload: UserLogin) => ({
  type: 'user/login',
  payload
});

export const userLogout = () => ({
  type: 'user/logout'
});
