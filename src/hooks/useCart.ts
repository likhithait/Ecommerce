// Import hook
import { useEffect, useState } from "react";

const useCart = () => {
  const [cart, setCard] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increaseCart = (id: number) => {
    const selectProduct = cart.find((item: CartItem) => item.id === id);
    if (selectProduct === undefined) {
      setCard((prevCard: CartItem[]) => {
        return [
          {
            id: id,
            amount: 1,
          },
          ...prevCard,
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
      setCard(newCart);
    }
  };

  const decreaseCart = (id: number) => {
    const selectProduct = cart.find((item: CartItem) => item.id === id);
    if (selectProduct.amount > 1) {
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
      setCard(newCart);
    } else {
      removeCart(id);
    }
  };

  const removeCart = (id: number) => {
    const newCart = cart.filter((item: CartItem) => item.id !== id);
    setCard(newCart);
  };

  return [cart, increaseCart, decreaseCart, removeCart];
};

export default useCart;

interface CartItem {
  id: number;
  amount: number;
}
