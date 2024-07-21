import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaUser, FaUtensils } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed h-full w-64 bg-gray-800 shadow-lg flex flex-col justify-between">
      <div>
        <Link to='/'>
            <div className="p-6 flex items-center justify-center bg-gray-900">
            <h1 className="text-2xl font-bold text-white">WasteNotAnymore</h1>
            </div>
        </Link>
        <nav className="mt-10">
          <ul>
            <li className="mb-6">
              <Link
                to="/"
                className="flex items-center text-white opacity-75 hover:opacity-100 hover:bg-gray-700 px-4 py-2"
              >
                <FaUsers className="mr-3" />
                Home
              </Link>
            </li>
            <li className="mb-6">
              <Link
                to="/community"
                className="flex items-center text-white opacity-75 hover:opacity-100 hover:bg-gray-700 px-4 py-2"
              >
                <FaUsers className="mr-3" />
                Community Page
              </Link>
            </li>
            <li className="mb-6">
              <Link
                to="/post-food"
                className="flex items-center text-white opacity-75 hover:opacity-100 hover:bg-gray-700 px-4 py-2"
              >
                <FaUtensils className="mr-3" />
                Posted food
              </Link>
            </li>
            <li className="mb-6">
              <Link
                to="/profile"
                className="flex items-center text-white opacity-75 hover:opacity-100 hover:bg-gray-700 px-4 py-2"
              >
                <FaUser className="mr-3" />
                Profile Page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4 flex items-center justify-center bg-gray-900">
        <span className="text-sm text-white">© 2024 FoodShare</span>
      </div>
    </div>
  );
};

export default Sidebar;
