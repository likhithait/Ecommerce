// Import components
import Background from "./Background";

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
      <Background />
    </header>
  );
};

export default Header;
