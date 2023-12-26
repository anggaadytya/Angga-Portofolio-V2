import React from "react";

interface searchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: searchModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white w-96 p-4 rounded-lg">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
