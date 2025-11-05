import React, { createContext, useState, useContext } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (item) => {
    setWishlist((prev) =>
      prev.find((p) => p.id === item.id) ? prev : [...prev, item]
    );
  };

  const removeFromWishlist = (itemToRemove) => {
    setWishlist((prev) => prev.filter((item) => item.id !== itemToRemove.id));
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (item) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decreaseQuantity = (itemToUpdate) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === itemToUpdate.id) {
          const newQuantity = item.quantity - 1;
          if (newQuantity > 0) {
            acc.push({ ...item, quantity: newQuantity });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  return (
    <StoreContext.Provider
      value={{
        wishlist,
        cart,
        addToWishlist,
        addToCart,
        removeFromWishlist,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
