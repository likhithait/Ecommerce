// Import hook
import { useContext } from "react";
import { Link } from "react-router-dom";
// Import context
import { CartContext } from "../context/CartContext";
// Import components
import Background from "../components/Background/Background";
import CartItem from "../components/CartItem/CartItem";
// Import styles
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cart, clearCart, totalCart } = useContext(CartContext);
  return (
    <div className="container">
      <div className={styles.cart}>
        {totalCart > 0 ? (
          <>
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
            <div className={styles.button_group}>
              <Link to="/">Continue Shopping</Link>
              <div>
                <button className={styles.clear} onClick={clearCart}>
                  Clear
                </button>
                <button
                  className={styles.check_out}
                  onClick={() => alert("Can't check out now")}
                >
                  Check Out
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.no_item}>
            <h1>Your cart is empty.</h1>
            <Link to="/">Go Shopping</Link>
          </div>
        )}
      </div>
      <Background />
    </div>
  );
};

export default Cart;
