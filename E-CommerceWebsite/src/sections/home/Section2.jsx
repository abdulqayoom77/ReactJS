import React from "react";

const SecHeading = ({ text }) => (
  <h2 className="text-3xl font-bold text-center mb-12 tracking-wide">{text}</h2>
);

const Section2 = () => {
  const categories = [
    {
      id: 1,
      name: "Best Perfumes For Men",
      image: "men-perfumes.jpg",
      description: "Premium perfumes crafted for men.",
    },
    {
      id: 2,
      name: "Best Perfumes For Women",
      image: "women-perfumes.jpg",
      description: "Elegant fragrances designed for women.",
    },
    {
      id: 3,
      name: "Premium Discovery Set 10ML X 5 = 50ML",
      image: "discovery-set.jpg",
      description: "A set of 5 premium perfumes, 10ml each.",
    },
    {
      id: 4,
      name: "10ML Perfume Bottle",
      image: "perfume-10ml.jpg",
      description: "Portable and stylish 10ml perfume bottles.",
    },
    {
      id: 5,
      name: "Pure Leather Wallets",
      image: "leather-wallet.jpg",
      description: "High-quality pure leather wallets.",
    },
    {
      id: 6,
      name: "Perfume Gift Box",
      image: "gift-box.jpg",
      description: "Elegant perfume gift sets for special occasions.",
    },
    {
      id: 7,
      name: "Perfume Vials - Testers 3ML",
      image: "vials-3ml.jpg",
      description: "Mini perfume testers, perfect for sampling.",
    },
    {
      id: 8,
      name: "Luxury Oud Collection",
      image: "oud-collection.jpg",
      description: "Premium oud perfumes with deep, woody notes.",
    },
    {
      id: 9,
      name: "Travel Size Perfumes",
      image: "travel-size.jpg",
      description: "Compact perfumes perfect for travel.",
    },
    {
      id: 10,
      name: "Unisex Perfumes",
      image: "unisex-perfumes.jpg",
      description: "Fragrances designed for everyone.",
    },
    {
      id: 11,
      name: "Limited Edition Scents",
      image: "limited-edition.jpg",
      description: "Rare and exclusive limited-edition fragrances.",
    },
    {
      id: 12,
      name: "Body Mists & Sprays",
      image: "body-mist.jpg",
      description: "Light and refreshing body mists for daily use.",
    },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <SecHeading text="POPULAR CATEGORIES" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-black h-32 w-32 rounded-full mb-4 transition-all duration-300 group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-gray-300"></div>
            <h3 className="text-sm font-semibold mb-2 text-center leading-tight min-h-[2.5rem] px-2 transition-colors duration-300 group-hover:text-gray-700">
              {category.name}
            </h3>
            <p className="text-gray-600 text-center text-xs leading-relaxed px-1 transition-colors duration-300 group-hover:text-gray-800">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;