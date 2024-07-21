import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';

const initialPosts = [
    {
        id: 1,
        name: 'Delicious Pancake',
        description: 'A simple and delicious pancake that the whole family will love.',
        imageUrl: 'https://images.pexels.com/photos/236804/pexels-photo-236804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        contactInfo: 'Contact: 123-456-7890',
      },
      {
        id: 2,
        name: 'Pizza Night',
        description: 'A fun pizza.',
        imageUrl: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        contactInfo: 'Contact: 987-654-3210',
      },
      {
        id: 3,
        name: 'Fresh Salad',
        description: 'Healthy and refreshing salad perfect for summer.',
        imageUrl: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        contactInfo: 'Contact: 555-555-5555',
      },
];

const PostFoodPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
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
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">My Posted Foods</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg relative">
                <img
                  src={post.imageUrl}
                  alt={post.name}
                  className="w-full h-32 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.name}</h3>
                <p className="text-gray-600 mb-2">{post.description}</p>
                <p className="text-gray-500">{post.contactInfo}</p>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>

        {selectedPost && (
          <Dialog open={true} onClose={handleCloseModal} className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <Dialog.Title className="text-2xl font-bold mb-4">Delete Post</Dialog.Title>
              <p className="mb-4">Are you sure you want to delete "{selectedPost.name}"?</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    handleDelete(selectedPost.id);
                    handleCloseModal();
                  }}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default PostFoodPage;
