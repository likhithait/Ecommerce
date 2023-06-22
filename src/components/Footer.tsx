// Import styles
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h1>
          New Style For You |{" "}
          <a href="https://github.com/parunchxi/React-Ecommerce-Website">
            Github
          </a>
        </h1>
      </div>
      <div className={styles.bg}>
        <div className={styles.shape_group}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
