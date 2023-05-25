import { StringProps, stringToBoolean } from '.';

describe('stringBoolean', () => {
  it('should return true', () => {
    const result = stringToBoolean('true');
    expect(result).toBe(true);
  });
  it('should return false', () => {
    const result = stringToBoolean('false');
    expect(result).toBe(false);
  });

  it('should return error message when string force other string', () => {
    const result = stringToBoolean('string' as StringProps);
    expect(result).toBe('String is not a boolean value');
  });
});
