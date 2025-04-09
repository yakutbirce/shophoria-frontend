import React from 'react';

const ClientLogo = ({ src, width, aspectRatio }) => {
  return (
    <figure className="flex overflow-hidden flex-col items-center max-w-full" style={{ width }}>
      <img
        src={src}
        alt="Client Logo"
        className="object-contain w-full"
        style={{ aspectRatio }}
      />
    </figure>
  );
};

export default ClientLogo;
