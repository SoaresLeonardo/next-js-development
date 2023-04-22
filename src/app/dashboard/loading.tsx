'use client';

const style = {
  width: '150%',
  maxWidth: '10rem',
  height: '5rem',
  backgroundColor: 'gray'
};

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}
    >
      <div style={style}></div>
      <div style={style}></div>
    </div>
  );
}
