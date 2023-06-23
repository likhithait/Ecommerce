// Import hook
import useCart from "../hooks/useCart";

// Import components
import Background from "../components/Background/Background";
import CartItem from "../components/Cart/CartItem";

const Cart = () => {
  const [cart, increaseCart, decreaseCart, removeCart] = useCart();
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
