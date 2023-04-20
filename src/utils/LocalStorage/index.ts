export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return;

  const data = window.localStorage.getItem(
    `${process.env.NEXT_APP_KEY_PUBLIC}_${key}`
  );

  return JSON.parse(data!);
}

export function setStorageItem(key: string, value: unknown) {
  if (typeof window === 'undefined') return;

  const data = JSON.stringify(value);

  return window.localStorage.setItem(
    `${process.env.NEXT_APP_KEY_PUBLIC}_${key}`,
    data
  );
}
