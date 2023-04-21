import { assertion } from './assertion';

export function assertIsString(value: string): asserts value is string {
  assertion(typeof value === 'string', `${value} is not a string`);
}
