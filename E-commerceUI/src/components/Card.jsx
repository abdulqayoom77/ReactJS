import React from "react";

const Card = ({ product }) => {
  const { name, price, description, image, brand, category, rating } = product;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      {/* Product Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Content */}
      <div className="flex flex-col flex-grow p-4">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
          <span className="font-medium">{brand}</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded-full">{category}</span>
        </div>

        <h2 className="text-lg font-semibold mb-1 line-clamp-1">{name}</h2>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 mb-3">
          {"★".repeat(Math.floor(rating))}
          {"☆".repeat(5 - Math.floor(rating))}
          <span className="text-gray-500 text-xs ml-1">({rating})</span>
        </div>

        {/* Price & Button */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">${price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition-transform duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
