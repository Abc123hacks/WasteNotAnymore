import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const Navbar = ({ filter, setFilter }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleAuthNavigation = (isSignUp) => {
    navigate('/auth', { state: { isSignUp } });
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Logo" className="h-10 w-10 mr-2" />
          </div>
          <div className="hidden md:block w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for food..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="hidden md:block">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors mr-2"
              onClick={() => handleAuthNavigation(false)}
            >
              Sign In
            </button>
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
              onClick={() => handleAuthNavigation(true)}
            >
              Sign Up
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu" ref={ref}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex justify-center mb-4">
                <input
                  type="text"
                  placeholder="Search for food..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors mb-2"
                onClick={() => handleAuthNavigation(false)}
              >
                Sign In
              </button>
              <button
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                onClick={() => handleAuthNavigation(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
