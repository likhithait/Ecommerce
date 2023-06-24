// Import hook
import { useContext } from "react";
// Import context
import { CartContext } from "../context/CartContext";
// Import components
import Background from "../components/Background/Background";
import CartItem from "../components/Cart/CartItem";

const Cart = () => {
  const { cart, increaseCart, decreaseCart, removeCart } =
    useContext(CartContext);
  return (
    <div>
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <Background />
    </div>
  );
};

export default Cart;
