import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-black text-black">
        <div className="max-w-md text-center">
          <img src='/assets/icon.png' alt="Note Taking" className='w-10'/>
        </div>
      </div>
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
