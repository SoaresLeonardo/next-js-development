import { PasswordProps, getPassword } from '.';

describe('getPassword', () => {
  it('should return password', () => {
    expect(getPassword('password')).toBe('Facebook Password');
    expect(getPassword('123Password')).toBe('Instagram Password');
    expect(getPassword('!pass1234')).toBe('Twitter Password');
    expect(getPassword('helloworld1234')).toBe('Github Password');
  });

  it('should return password not found', () => {
    expect(getPassword('notFound' as PasswordProps)).toBe('Password not found');
  });
});
