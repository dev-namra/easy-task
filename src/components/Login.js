import React from 'react';
import AuthForm from './AuthForm';

const Login = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6 text-black text-center">Login</h1>
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>with email</p>
      </div>
      <AuthForm type="login" />
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Don't have an account? <a href="/signup" className="text-blue hover:underline">Sign up here</a></p>
      </div>
    </>
  );
};

export default Login;
