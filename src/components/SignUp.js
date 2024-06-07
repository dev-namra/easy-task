import React from 'react';
import AuthForm from './AuthForm';
import SocialSignUp from './SocialSignUp';

const SignUp = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>
      <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
        Join to Our Community with all time access and free
      </h1>
      <SocialSignUp />
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>or with email</p>
      </div>
      <AuthForm type="signup" />
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Already have an account? <a href="/login" className="text-black hover:underline">Login here</a></p>
      </div>
    </>
  );
};

export default SignUp;
