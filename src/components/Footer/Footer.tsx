import styles from "./Footer.module.scss"; // Styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h1>
          Styles 4 You {" "}
        </h1>
      </div>
      <div className={styles.bg}></div>
    </footer>
  );
};

export default Footer;
