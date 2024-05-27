'use client';
import React, { useState } from 'react';

const ClientComponent = () => {
  const [data, setData] = useState<string>('');

  return (
    <>
      <div onClick={() => console.log('clicked')}>ClientComponent</div>
    </>
  );
};

export default ClientComponent;
