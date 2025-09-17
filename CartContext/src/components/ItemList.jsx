import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const ItemList = () => {
  const { addItem } = useContext(CartContext);

  const items = [
    { id: Math.random(), name: "Item 1", price: 50 },
    { id: Math.random(), name: "Item 2", price: 150 },
  ];

  return items.map((item) => (
    <div key={item.id} className="border-1 border-black rounded-md w-72 mb-5 p-4">
      <h3 className="text-xl font-semibold">
        {item.name} - {item.price}
      </h3>
      <button className=" mt-3 cursor-pointer px-4 py-2 bg-black text-white hover:bg-gray-700 rounded-md" onClick={() => addItem(item)}>Add</button>
    </div>
  ));
};

export default ItemList;
