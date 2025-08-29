
import React, { useState } from 'react';

// Sample data for items in the store
const storeItems = [
  { id: 1, name: 'Premium Subscription', price: '$9.99/month' },
  { id: 2, name: 'Exclusive Movie Rental', price: '$4.99' },
  { id: 3, name: 'VIP Content Access', price: '$19.99' },
  { id: 4, name: 'Movie Merchandise', price: '$14.99' }
];

const Store = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="md:h-[400px] md:text-2xl flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">AHA OTT Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {storeItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            onClick={() => handleSelectItem(item)}
          >
            <h2 className="font-semibold text-xl">{item.name}</h2>
            <p className="text-gray-600 mt-2">{item.price}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="font-bold text-2xl">Selected Item:</h2>
          <p className="text-lg">{selectedItem.name}</p>
          <p className="text-lg">{selectedItem.price}</p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default Store;

