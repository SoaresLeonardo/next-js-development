/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function getStorageItem(key: string) {
  const data = window.localStorage.getItem(key);

  return JSON.parse(data!);
}

export function setStorageItem(key: string, value: unknown) {
  const data = JSON.stringify(value);

  return window.localStorage.setItem(key, data);
}
