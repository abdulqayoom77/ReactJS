import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const addItem = (item) => {
    setCart([...cart, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    const removedItem = cart.find((item) => item.id === id);
    setTotalPrice(totalPrice - removedItem.price);
  };
  return (
    <CartContext.Provider value={{ cart, totalPrice, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
