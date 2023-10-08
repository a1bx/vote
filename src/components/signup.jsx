import React, { useState } from 'react';
import Avatar from '../assets/avatar.svg';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSignup = () => {
    // Pass the phone number as a query parameter
    navigate(`/VerificationPage?phone=${phone}`);
  };

  return (
    <div className="min-h-screen bg-gray flex flex-col justify-center">
      <div className="m-auto">
        <form className="bg-gray">
          <img src={Avatar} alt="Login" className="mb-4 ml-4" />
          <h1 className="font-bold mt-2 text-center">Signup</h1>
          <p className="text-center mb-4">To get started, please sign up.</p>
          <div className="mb-4">
            <input
              className="bg-white rounded-md w-full py-2 px-3 "
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <input
              className="bg-white rounded-md w-full py-2 px-3"
              id="phone_number"
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="mb-6">
            <input
              className="bg-white rounded-md w-full py-2 px-3 "
              id="password"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-6">
            <input
              className="bg-white rounded-md w-full py-2 px-3 "
              id="confirm_password"
              type="password"
              placeholder="Confrim Password"
            />
          </div>
          <p className='text-center mb-4'>Already have an account? <ul className='text-red'>login</ul></p>
          
          <div className="flex items-center justify-between">
            <button
              onClick={handleSignup}
              className="justify-center bg-red shadow-red ml-12 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
