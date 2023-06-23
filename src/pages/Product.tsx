// Import hook
import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";

// Import components
import Background from "../components/Background/Background";

// Import styles
import styles from "./Product.module.scss";

// import data
import { productData } from "../data/productData";

const Product = () => {
  const [increaseCart] = useCart();
  const { productID } = useParams();
  const product = productData.filter(
    (product) => product.id === Number(productID)
  );

  return (
    <>
      <div className="container">
        <div className={styles.product}>
          <div className={styles.img}>
            <img src={`../${product[0].images.preview}`} />
          </div>
          <div className={styles.detail}>
            <div className="top">
              <h1 className={styles.title}>{product[0].title}</h1>
              <p className={styles.description}>{product[0].description}</p>
            </div>
            <div className="bottom">
              <p className={styles.price}>${product[0].price}</p>
              <button onClick={() => increaseCart(productID)}>
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
