import React, { useState, useEffect } from 'react';
import Avatar from '../assets/avatar.svg';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const phone = queryParams.get('phone')
  
 
  const [captchaCode, setCaptchaCode] = useState('');
  const [enteredCaptcha, setEnteredCaptcha] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [error, setError] = useState('');

  // Generate a random CAPTCHA code when the component mounts
  useEffect(() => {
    refreshCaptcha();
  }, []);

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setEnteredCaptcha('');
    setError('');
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Validate the entered captcha code
    if (enteredCaptcha === captchaCode) {
      
      if (isValidKenyanID(idNumber)) {
       
       
        navigate(`/OTP?phone=${(phone)}`);
      } else {
        setError('Invalid Kenyan ID number. Please try again.');
        refreshCaptcha();
      }
    } else {
      setError('CAPTCHA verification failed. Please try again.');
      refreshCaptcha();
    }
  };
 

  // Function to generate a random CAPTCHA code
  const generateCaptcha = () => {
    const length = 6; // Adjust the length of the CAPTCHA code as needed
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }
    return captcha;
  };

  const handleCaptchaChange = (e) => {
    setEnteredCaptcha(e.target.value);
  };

  const handleIDNumberChange = (e) => {
    setIdNumber(e.target.value);
  };

  // Function to validate Kenyan ID numbers
  const isValidKenyanID = (id) => {
    // Use a regular expression to check the ID format
    const idPattern = /^[0-9]{8,10}$/;
    return idPattern.test(id);
  };
 

  return (
    <div className="min-h-screen bg-gray flex flex-col justify-center">
      <div className="m-auto">
        <form className="bg-gray" onSubmit={handleSubmit}>
          <img src={Avatar} alt="Login" className="mb-4 ml-4" />
          <h1 className="font-bold mt-2 text-center">Verification</h1>
          <p className="text-center mb-4">
            To continue, you have to verify your identity
          </p>
          <div className="mb-4">
            <input
              className="bg-white rounded-md w-full py-2 px-3"
              id="username"
              type="text"
              placeholder="National ID Number"
              value={idNumber}
              onChange={handleIDNumberChange}

            />
          </div>
          <p className="text-center mb-4">Verify you're human!</p>
          <strong>{captchaCode}</strong>
          <div className="mb-6">
            <input
              className="bg-white rounded-md w-full py-2 px-3"
              id="captcha"
              type="text"
              placeholder="Enter CAPTCHA Code"
              value={enteredCaptcha}
              onChange={handleCaptchaChange}
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="flex items-center justify-between">
            <button
           
              className="justify-center bg-red shadow-red ml-12 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;