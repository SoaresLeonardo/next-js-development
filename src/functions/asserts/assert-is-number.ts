import { assertion } from './assertion';

export function assertIsNumber(value: number): asserts value is number {
  assertion(typeof value === 'number', `${value} it's not an number`);
}
