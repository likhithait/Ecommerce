import React, { createContext, useEffect, useState } from "react";

interface CartItem {
  id: number;
  amount: number;
}

interface CartContextProps {
  cart: CartItem[];
  increaseCart: (id: number) => void;
  decreaseCart: (id: number) => void;
  removeCart: (id: number) => void;
  totalCart: number;
}

export const CartContext = createContext<CartContextProps | null>(null);

export const CartContextProvider: React.FC = ({ children }) => {
  const [totalCart, setTotalCart] = useState(0);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    total();
  }, [cart]);

  const increaseCart = (id: number) => {
    const selectProduct = cart.find((item: CartItem) => item.id === id);
    if (selectProduct === undefined) {
      setCart((prevCart: CartItem[]) => {
        return [
          {
            id: id,
            amount: 1,
          },
          ...prevCart,
        ];
      });
    } else {
      const newCart = cart.map((item: CartItem) => {
        if (item.id === id) {
          return {
            id: id,
            amount: selectProduct.amount + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  const decreaseCart = (id: number) => {
    const selectProduct = cart.find((item: CartItem) => item.id === id);
    if (selectProduct && selectProduct.amount > 1) {
      const newCart = cart.map((item: CartItem) => {
        if (item.id === id) {
          return {
            id: id,
            amount: selectProduct.amount - 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      removeCart(id);
    }
  };

  const removeCart = (id: number) => {
    const newCart = cart.filter((item: CartItem) => item.id !== id);
    setCart(newCart);
  };

  const total = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.amount;
    });
    setTotalCart(sum);
  };

  const contextValue: CartContextProps = {
    cart,
    increaseCart,
    decreaseCart,
    removeCart,
    totalCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
