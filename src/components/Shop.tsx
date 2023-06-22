// Import components
import ShopCard from "./ShopCard";

// Import styles
import styles from "./Shop.module.scss";

// import data
import { productData, ProductData } from "../data/productData";

const Shop = () => {
  const shopItem = productData.map((product) => {
    return <ShopCard key={product.id} product={product} />;
  });

  return (
    <div className="container">
      <div className={styles.shop}>{shopItem}</div>
    </div>
  );
};

export default Shop;
