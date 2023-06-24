// Import components
import Background from "../Background/Background";
// Import styles
import styles from "./Header.module.scss";

const Header: React.FC = () => {
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
