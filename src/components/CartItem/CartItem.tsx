// Import hook
import { useContext } from "react";
// Import context
import { CartContext } from "../../context/CartContext";
// import data
import { productData } from "../../data/productData";
// Import icons
import { FaMinus, FaPlus } from "react-icons/fa";
// Import styles
import styles from "./CartItem.module.scss";

const CartItem: React.FC = ({ item }) => {
  const { increaseCart, decreaseCart, removeCart, totalCart } =
    useContext(CartContext);
  const product = productData.filter((product) => product.id === item.id);
  const { title, description, price, images } = product[0];

  return (
    <div className={styles.card}>
      <div className={styles.product}>
        <div className={styles.img}>
          <img src={`../${images.preview}`} alt={title} />
        </div>
        <div className={styles.detail}>
          <h1>{title}</h1>
          <div className={styles.amount}>
            <button
              className={styles.decrease}
              onClick={() => decreaseCart(item.id)}
            >
              <FaMinus />
            </button>
            <p>{item.amount}</p>
            <button
              className={styles.increase}
              onClick={() => increaseCart(item.id)}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.price}>
        <h1>${(item.amount * price).toFixed(2)}</h1>
      </div>
      {/* <p>x</p> */}
    </div>
  );
};

export default CartItem;