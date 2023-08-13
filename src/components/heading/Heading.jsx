/* eslint-disable react/prop-types */
import styles from "./heading.module.css";

const Text = ({ size, children, color, gap }) => {
  const textClassName = `${styles.text} ${styles[size]} ${styles[color]} ${styles[gap]}`;

  return <h2 className={textClassName}>{children}</h2>;
};

export default Text;
