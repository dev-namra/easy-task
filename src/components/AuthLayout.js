import React from 'react';
import icon from '../assets/cover.png';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-lg text-center">
          <p className='text-4xl font- font-bold mb-10'>Easy Task</p>
          <img src={icon} alt="Note Taking"/>
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
