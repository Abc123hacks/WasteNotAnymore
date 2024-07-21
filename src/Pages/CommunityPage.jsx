import React from 'react';
import { FaUsers, FaUserFriends, FaHandshake } from 'react-icons/fa';

const CommunityPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="hidden md:block w-64 bg-gray-800 text-white h-screen p-4">
        <div className="text-2xl font-bold mb-8">FoodShare</div>
        <ul>
          <li className="mb-4">
            <a href="/community" className="flex items-center text-lg hover:bg-gray-700 p-2 rounded">
              <FaUsers className="mr-2" /> Community Page
            </a>
          </li>
          <li className="mb-4">
            <a href="/profile" className="flex items-center text-lg hover:bg-gray-700 p-2 rounded">
              <FaUserFriends className="mr-2" /> Profile Page
            </a>
          </li>
          <li>
            <a href="/post-food" className="flex items-center text-lg hover:bg-gray-700 p-2 rounded">
              <FaHandshake className="mr-2" /> Post Food Page
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Community</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join the Community</h2>
          <p className="text-gray-600 mb-4">
            Connect with other food enthusiasts, share your experiences, and collaborate on food-related projects. Whether you're looking to make new friends, find local food events, or simply engage with a community of like-minded individuals, this is the place for you!
          </p>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Upcoming Events</h3>
            <ul>
              <li className="mb-2">
                <strong>Food Festival:</strong> August 20, 2024 - Join us for a day of delicious food and fun activities!
              </li>
              <li className="mb-2">
                <strong>Community Potluck:</strong> September 15, 2024 - Bring a dish and share with the community.
              </li>
              <li>
                <strong>Cooking Workshop:</strong> October 5, 2024 - Learn new recipes and cooking techniques from local chefs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
