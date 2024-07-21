import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FoodModal from '../Components/FoodModal';
import FabButton from '../Components/FabButton';

const foodItems = [
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

const HomePage = () => {
  const [filter, setFilter] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);
  const [isAddingFood, setIsAddingFood] = useState(false);

  const filteredItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddFoodClick = () => {
    setIsAddingFood(true);
  };

  const handleCloseModal = () => {
    setIsAddingFood(false);
  };

  const handleAddFood = (newFoodItem) => {
    foodItems.push(newFoodItem); // In a real application, you would update state or make an API call
    setIsAddingFood(false);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-8 ml-64">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Available Food Items</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-200"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedFood(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-500 mt-2">{item.location}</p>
              </motion.div>
            ))}
          </div>

          {selectedFood && (
            <FoodModal
              food={selectedFood}
              onClose={() => setSelectedFood(null)}
            />
          )}

          {isAddingFood && (
            <FoodModal
              onClose={handleCloseModal}
              onSubmit={handleAddFood}
              isAddingFood
            />
          )}
        </div>
      </div>
      <FabButton onClick={handleAddFoodClick} />
    </div>
  );
};

export default HomePage;
