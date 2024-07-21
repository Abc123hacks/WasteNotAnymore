// AuthenticationPage.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AuthenticationPage = () => {
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    if (location.state && location.state.isSignUp !== undefined) {
      setIsSignUp(location.state.isSignUp);
    }
  }, [location.state]);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden" style={{ maxWidth: '900px' }}>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            {isSignUp && (
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                />
                <Link to='/'>
                  <p className='underline text-center'>or<br/>continue without signing up!</p>
                </Link>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          <div className="mt-4 text-center">
            <button
              onClick={toggleForm}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <img
            src="https://images.pexels.com/photos/8466649/pexels-photo-8466649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Authentication"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
