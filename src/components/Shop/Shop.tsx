// import data
import { productData } from "../../data/productData";
// Import components
import ShopCard from "./ShopCard";
// Import styles
import styles from "./Shop.module.scss";

const Shop: React.FC = () => {
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
