import React from 'react';
import { FaPlus } from 'react-icons/fa';

const FabButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors"
      aria-label="Add Food Item"
    >
      <FaPlus size={24} />
    </button>
  );
};

export default FabButton;
