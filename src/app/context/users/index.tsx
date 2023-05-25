import { createContext, useCallback, useContext, useState } from 'react';
import { IUserContext, UserProps, UserProviderProps } from './types';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<UserProps[]>([]);

  const addUser = useCallback((user: UserProps) => {
    setUsers((users) => [...users, user]);
  }, []);

  const removeUser = useCallback(
    (userId: number) => {
      const newUsers = users.filter((user) => user.id !== userId);

      setUsers(newUsers);
    },
    [users]
  );
  return (
    <UserContext.Provider value={{ users, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
