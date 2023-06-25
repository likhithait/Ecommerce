// Import hook
import { useContext } from "react";
import { useScrollPosition } from "../../hook/useScrollPosition";
// Import context
import { CartContext } from "../../context/CartContext";
// Import link
import { Link } from "react-router-dom";
// Import icons
import { FaShoppingCart } from "react-icons/fa";
// Import styles
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { totalCart } = useContext(CartContext);
  const scrollPosition = useScrollPosition();

  return (
    <>
      <nav
        className={`${styles.navbar} container ${
          scrollPosition > 40 ? `${styles.scroll}` : ""
        }`}
      >
        <div className={styles.logo}>
          <Link to="/">
            <img src="/favicon.svg" />
            <h1>S4U</h1>
          </Link>
        </div>
        <ul className={styles.link_group}>
          <li>
            <Link to="/cart" title="Cart">
              <FaShoppingCart />
              <span className={totalCart === 0 ? `${styles.zero}` : ""}>
                {totalCart}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
