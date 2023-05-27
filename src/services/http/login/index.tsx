import { LoginProps, LoginResultProps } from './types';

export const UserService = {
  login: async function ({
    login,
    password
  }: LoginProps): Promise<LoginResultProps | undefined> {
    try {
      console.log('UserService.login', login, password);

      return {
        status: 200,
        message: 'successs'
      };
    } catch (error) {
      console.log(error);
    }
  }
};
