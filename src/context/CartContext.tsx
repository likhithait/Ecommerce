import React, { createContext, useEffect, useState } from "react";
// import data
import { productData } from "../data/productData";

interface CartItemProps {
  id: number;
  amount: number;
}

interface CartContextProps {
  cart: CartItemProps[];
  increaseCart: (id: number) => void;
  decreaseCart: (id: number) => void;
  removeCart: (id: number) => void;
  totalCart: number;
}

export const CartContext = createContext<CartContextProps | null>(null);

export const CartContextProvider: React.FC = ({ children }) => {
  const [totalCart, setTotalCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState<CartItemProps[]>(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    sumAmount();
    sumPrice();
  }, [cart]);

  const increaseCart = (id: number) => {
    const selectProduct = cart.find((item: CartItemProps) => item.id === id);
    if (selectProduct === undefined) {
      setCart((prevCart: CartItemProps[]) => {
        return [
          {
            id: id,
            amount: 1,
          },
          ...prevCart,
        ];
      });
    } else {
      const newCart = cart.map((item: CartItemProps) => {
        if (item.id === id) {
          return {
            id: id,
            amount: Number(selectProduct.amount) + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  const decreaseCart = (id: number) => {
    const selectProduct = cart.find((item: CartItemProps) => item.id === id);
    if (selectProduct && selectProduct.amount > 1) {
      const newCart = cart.map((item: CartItemProps) => {
        if (item.id === id) {
          return {
            id: id,
            amount: Number(selectProduct.amount) - 1,
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
    const newCart = cart.filter((item: CartItemProps) => item.id !== id);
    setCart(newCart);
  };

  const sumAmount = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += Number(item.amount);
    });
    setTotalCart(sum);
  };

  const sumPrice = () => {
    let sum = 0;
    cart.forEach((item) => {
      productData.forEach((product) => {
        sum += Number(item.amount) * product.price;
      });
    });
    setTotalPrice(sum);
  };

  const handleAmountChange = (id: number, value: number) => {
    const selectProduct = cart.find((item: CartItemProps) => item.id === id);
    if (selectProduct) {
      const newCart = cart.map((item: CartItemProps) => {
        if (item.id === id) {
          return {
            id: id,
            amount: value,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  const clearCart = (id: number) => {
    setCart([]);
  };

  const contextValue: CartContextProps = {
    cart,
    increaseCart,
    decreaseCart,
    removeCart,
    totalCart,
    totalPrice,
    handleAmountChange,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
