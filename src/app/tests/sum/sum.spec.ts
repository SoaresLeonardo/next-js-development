import { sum } from './sum';

describe('Sum function', () => {
  it('shold return a number', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
