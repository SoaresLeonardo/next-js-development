import { User } from '@/services/http/user/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useSingle = () => {
  const [data, setData] = useState<User[]>([]);

  console.log(data);

  const handleFetch = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=20');

    setData(response.data.results);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return {
    data
  };
};

export const handleSetColorByGender = (gender: string) => {
  if (gender === 'male') return 'blue';
  return 'red';
};
