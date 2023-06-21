import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.logo}>
        <Link to="/">Logo</Link>
      </div>
      <ul className={styles.link_group}>
        <li>
          <Link to="/profile" title="Profile">
            <FaUserCircle />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaShoppingCart title="Cart" />
            <span>0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
