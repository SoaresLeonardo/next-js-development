export type PasswordProps =
  | 'password'
  | '123Password'
  | '!pass1234'
  | 'helloworld1234';

export function getPassword(password: PasswordProps) {
  // if (password === 'password') {
  //   return 'Facebook Password';
  // }
  // if (password === '123Password') {
  //   return 'Instagram Password';
  // }
  // if (password === '!pass1234') {
  //   return 'Twitter Password';
  // }
  // if (password === 'helloworld1234') {
  //   return 'Github Password';
  // }
  // return 'Password not found';

  const passwords = {
    password: 'Facebook Password',
    '123Password': 'Instagram Password',
    '!pass1234': 'Twitter Password',
    helloworld1234: 'Github Password'
  };

  return passwords[password] ?? 'Password not found';
}
