import React from "react";
import { Link } from "react-router-dom";
// Import styles
import styles from "./ShopCard.module.scss";
// Import props
import { ProductDataProps } from "../../data/productData";

const ShopCard: React.FC<ProductDataProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className={styles.card}>
        <div className={styles.img_box}>
          <img
            src={product.images.preview}
            alt={product.description}
            draggable="false"
          />
        </div>
        <h1>{product.title}</h1>
        <p>${product.price}</p>
      </div>
    </Link>
  );
};

export default ShopCard;
