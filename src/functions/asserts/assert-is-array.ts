import { assertion } from './assertion';

export function assertIsArray(value: unknown): asserts value is object {
  assertion(Array.isArray(value), `${value} it's not an array`);
}
