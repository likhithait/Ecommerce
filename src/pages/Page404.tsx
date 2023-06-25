// Import link
import { Link } from "react-router-dom";
// Import styles
import styles from "./Page404.module.scss";

const Page404 = () => {
  return (
    <div className={styles.not_found}>
      <div className="container">
        <h1>404</h1>
        <p>NOT FOUND</p>
        <Link to="/">Go Home</Link>
      </div>
      <div className={styles.bg}></div>
    </div>
  );
};

export default Page404;
