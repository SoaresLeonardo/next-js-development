export type StringProps = 'true' | 'false';

export function stringToBoolean(str: StringProps) {
  const strings = {
    true: true,
    false: false
  };

  return strings[str] ?? 'String is not a boolean value';
}
