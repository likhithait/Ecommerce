// Import styles
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1>
          NEW STYLE <span>FOR YOU</span>
        </h1>
      </div>
      <div className={styles.bg}>
        <div className={styles.shape_group}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
          <div className={styles.shape4}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
