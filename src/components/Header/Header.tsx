// Import components
import Background from "../Background/Background";
// Import styles
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1>NEW STYLE</h1>
      </div>
      <div className={styles.bg}></div>
    </header>
  );
};

export default Header;
