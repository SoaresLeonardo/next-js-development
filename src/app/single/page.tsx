'use client';

import { handleSetColorByGender, useSingle } from './hooks/useSingle';

export default function Single() {
  const { data } = useSingle();
  return (
    <div>
      <h1>Single Responsibility Principle</h1>
      {data?.map((item) => (
        <p
          style={{ color: handleSetColorByGender(item.gender) }}
          key={item.cell}
        >
          {item.name.first}
        </p>
      ))}
    </div>
  );
}
