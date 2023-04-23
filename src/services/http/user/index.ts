import axios from 'axios';
import api from '@/services/api';
import { User } from './types';

class UserService {
  async getAll(): Promise<User[] | undefined> {
    try {
      const { data } = await api.get<User[]>('users');
      return data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        throw new Error(`Status: ${err.response.status} - ${err.message}`);
      }
    }
  }
}

const userService = new UserService();

export default userService;
