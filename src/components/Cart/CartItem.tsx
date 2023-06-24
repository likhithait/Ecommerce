// Import styles
import styles from "./CartItem.module.scss";

const CartItem: React.FC = ({ item }) => {
  return (
    <div>
      {item.id}: {item.amount}
    </div>
  );
};

export default CartItem;
