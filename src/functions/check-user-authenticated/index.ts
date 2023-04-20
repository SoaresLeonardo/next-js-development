import { getStorageItem } from '@/utils/LocalStorage';

export const checkUserAuthenticated = () => {
  const userToken = getStorageItem(process.env.NEXT_APP_KEY_PUBLIC as string);

  return !!userToken;
};
