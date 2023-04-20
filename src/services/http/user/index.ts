import { RandomUserResponse, User } from './types';

export const PeopleService = {
  getAll: async function (): Promise<User[] | undefined> {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data: RandomUserResponse = await response.json();
      return data.results;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
};
