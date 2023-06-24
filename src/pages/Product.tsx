// Import hook
import { useContext } from "react";
import { useParams } from "react-router-dom";
// Import context
import { CartContext } from "../context/CartContext";
// import data
import { productData } from "../data/productData";
// Import components
import Background from "../components/Background/Background";
// Import styles
import styles from "./Product.module.scss";

const Product = () => {
  const { increaseCart } = useContext(CartContext);
  const { productID } = useParams<{ productID: string }>();
  const product = productData.filter(
    (product) => product.id === Number(productID)
  );
  const { title, description, price, images } = product[0];

  return (
    <>
      <div className="container">
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={`../${images.preview}`} alt={title} />
          </div>
          <div className={styles.detail}>
            <div className="top">
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
            </div>
            <div className="bottom">
              <p className={styles.price}>${price}</p>
              <button onClick={() => increaseCart(Number(productID))}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Background />
    </>
  );
};

export default Product;
