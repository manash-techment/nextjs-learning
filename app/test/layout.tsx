import React from 'react';

const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="mt-5 bg-gray-600 p-10 text-cyan-100 ">TestLayout</div>
      {children}
    </>
  );
};

export default TestLayout;
