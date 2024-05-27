// 'use client';
import React from 'react';
import ServerComponent from '../ui/server-component';
import ClientComponent from '../ui/client-component';

const TestPage = () => {
  return (
    <>
      <div className="mt-5 bg-gray-600 p-5 text-cyan-100 ">TestPage</div>
      <ServerComponent />
      <ClientComponent />
    </>
  );
};

export default TestPage;
