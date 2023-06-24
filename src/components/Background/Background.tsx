// Import styles
import styles from "./Background.module.scss";

const Background: React.FC = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.shape_group}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
        <div className={styles.shape4}></div>
      </div>
    </div>
  );
};

export default Background;
