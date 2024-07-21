import React from 'react';

const ProfilePage = () => {
  // Hardcoded user profile data
  const userProfile = {
    name: 'Abhay',
    email: 'Abhay@example.com',
    bio: 'Want to help save the food!',
    profilePicture: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    posts: [
        {
            id: 1,
            name: 'Delicious Pancake',
            description: 'A simple and delicious pancake that the whole family will love.',
            date: 'June 1, 2021',
          },
          {
            id: 2,
            name: 'Pizza Night',
            description: 'A fun pizza.',
            date: 'June 15, 2021',
          },
          {
            id: 3,
            name: 'Fresh Salad',
            description: 'Healthy and refreshing salad perfect for summer.',
            date: 'July 5, 2021',
          },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="hidden md:block w-64 bg-gray-800 text-white h-screen p-4">
        <div className="text-2xl font-bold mb-8">FoodShare</div>
        <ul>
          <li className="mb-4">
            <a href="/community" className="flex items-center text-lg hover:bg-gray-700 p-2 rounded">
              Community Page
            </a>
          </li>
          <li className="mb-4">
            <a href="/profile" className="flex items-center text-lg hover:bg-gray-700 p-2 rounded">
              Profile Page
            </a>
          </li>
          <li>
            <a href="/post-food" className="flex items-center text-lg hover:bg-gray-700 p-2 rounded">
              Post Food Page
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Profile</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center md:flex-row">
          <img
            src={userProfile.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{userProfile.name}</h2>
            <p className="text-gray-600 mb-4">{userProfile.email}</p>
            <p className="text-gray-700 mb-6">{userProfile.bio}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Posts</h2>
          <ul>
            {userProfile.posts.map((post) => (
              <li key={post.id} className="mb-4 border-b border-gray-300 pb-4">
                <h3 className="text-xl font-semibold text-gray-700 mb-1">{post.title}</h3>
                <p className="text-gray-600 mb-2">{post.description}</p>
                <p className="text-gray-500 text-sm">Posted on {post.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
