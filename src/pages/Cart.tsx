import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, CartItemProps } from "../context/CartContext"; // Context
import Background from "../components/Background/Background";
import CartItem from "../components/CartItem/CartItem";
import { productData } from "../data/productData"; // Import product data
import styles from "./Cart.module.scss"; // Styles

const Cart = () => {
  const context = useContext(CartContext);

  if (!context) {
    return;
  }

  const { cart, clearCart, totalCart, totalPrice } = context;

  // Function to generate WhatsApp message
  const generateWhatsAppMessage = () => {
    let message = "Hello, I would like to purchase the following items:\n\n";

    cart.forEach((item: CartItemProps) => {
      // Find the product based on the item id
      const product = productData.find((product) => product.id === item.id);

      if (product) {
        message += `${product.title} (x${item.amount}) - $${(item.amount * product.price).toFixed(2)}\n`;
      }
    });

    message += `\nTotal: $${totalPrice.toFixed(2)}\n\nPlease contact me for further details.`;

    // WhatsApp link format
    const phoneNumber = "+919550458189"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  // Handle checkout by opening WhatsApp
  const handleCheckout = () => {
    const whatsappLink = generateWhatsAppMessage();
    window.open(whatsappLink, "_blank"); // Open WhatsApp with the generated message
  };

  return (
    <div className="container">
      <div className={styles.cart}>
        {totalCart > 0 ? (
          <>
            {cart.map((item: CartItemProps) => {
              return <CartItem key={item.id} item={item} />;
            })}
            <h1 className={styles.total}>Total: ${totalPrice.toFixed(2)}</h1>
            <div className={styles.button_group}>
              <Link to="/">Continue Shopping</Link>
              <div>
                <button className={styles.clear} onClick={clearCart}>
                  Clear
                </button>
                <button
                  className={styles.check_out}
                  onClick={handleCheckout} // Updated to call handleCheckout
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
