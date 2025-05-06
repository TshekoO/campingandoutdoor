
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
    
            if (itemExists) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };
    
    const removeFromCart = (id, removeAll = false) => {
        setCart((prevCart) => {
            return prevCart.flatMap((item) => {
                if (item.id !== id) return [item];
                if (removeAll || item.quantity <= 1) return []; // Remove completely
                return [{ ...item, quantity: item.quantity - 1 }];
            });
        });
    };
    

    const updateCart = (newCart) => {
        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
