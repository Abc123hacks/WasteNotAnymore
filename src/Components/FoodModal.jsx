import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const FoodModal = ({ food, onClose, onSubmit, isAddingFood }) => {
  const [formData, setFormData] = useState(
    isAddingFood ? { name: '', description: '', location: '', imageUrl: '', contactInfo: '' } : food
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <Dialog.Title className="text-2xl font-bold mb-4">
          {isAddingFood ? 'Add New Food Item' : formData.name}
        </Dialog.Title>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Food Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="contactInfo"
              placeholder="Contact Info"
              value={formData.contactInfo}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors w-full"
            >
              {isAddingFood ? 'Add Food Item' : 'Update'}
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default FoodModal;
