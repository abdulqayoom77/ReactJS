import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Cart = () => {
  const { cart, totalPrice, removeItem } = useContext(CartContext);

  return (
    <div className="border-1 border-black rounded-md w-72 mb-5 p-4">
      <h2 className="text-3xl font-semibold">Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="border-1 border-black rounded-md w-64 mt-3 mb-5 p-4"
        >
          <h2>
            {item.name} - {item.price}
          </h2>
          <button onClick={() => removeItem(item.id)} className=" mt-3 cursor-pointer px-4 py-2 bg-black text-white hover:bg-gray-700 rounded-md" >Remove Item</button>
        </div>
      ))}
      <h2>Total Price : {totalPrice}</h2>
    </div>
  );
};

export default Cart;
