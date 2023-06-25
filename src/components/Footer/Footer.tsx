// Import styles
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h1>
          New Style |{" "}
          <a href="https://github.com/parunchxi/React-Ecommerce-Website">
            Github
          </a>
        </h1>
      </div>
      <div className={styles.bg}></div>
    </footer>
  );
};

export default Footer;
