// Import styles
import styles from "./ShopCard.module.scss";

const ShopCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img_box}>
        <img
          src={product.images.preview}
          alt={product.description}
          draggable="false"
        />
      </div>
      <h1>{product.title}</h1>
      {/* <p>{product.description}</p> */}
      <p>${product.price}</p>
    </div>
  );
};

export default ShopCard;
