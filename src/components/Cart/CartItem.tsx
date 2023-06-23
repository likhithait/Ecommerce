// Import styles
import styles from "./CartItem.module.scss";

const CartItem = ({ item }) => {
  return (
    <div>
      {item.id}: {item.amount}
    </div>
  );
};

export default CartItem;
