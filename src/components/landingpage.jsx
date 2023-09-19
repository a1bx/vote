import React from 'react';

function LandingPage (){
  return (
    <div className="bg-cover bg-center h-screen bg-image">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Welcome to Your App</h1>
          <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md">
              Login
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full shadow-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
