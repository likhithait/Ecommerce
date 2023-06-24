// Import hook
import { useParams } from "react-router-dom";
import { useContext } from "react";

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
  const { productID } = useParams();
  const product = productData.filter(
    (product) => product.id === Number(productID)
  );

  return (
    <>
      <div className="container">
        <div className={styles.product}>
          <div className={styles.img}>
            <img
              src={`../${product[0].images.preview}`}
              alt={product[0].title}
            />
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
