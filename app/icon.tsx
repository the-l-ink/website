import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#08101f',
          color: '#67e8f9',
          display: 'flex',
          fontSize: 21,
          fontWeight: 700,
          height: '100%',
          justifyContent: 'center',
          letterSpacing: -4,
          width: '100%',
        }}
      >
        {'<>'}
      </div>
    ),
    size,
  );
}
