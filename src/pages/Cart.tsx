// Import hook
import { useContext } from "react";
// Import context
import { CartContext } from "../context/CartContext";
// Import components
import Background from "../components/Background/Background";
import CartItem from "../components/CartItem/CartItem";
// Import styles
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container">
      <div className={styles.cart}>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <Background />
    </div>
  );
};

export default Cart;
