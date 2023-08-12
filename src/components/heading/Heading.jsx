/* eslint-disable react/prop-types */
import styles from "./heading.module.css";

const Text = ({ size, children }) => {
  const textClassName = `${styles.text} ${styles[size]}`;

  return (
    <h2 className={textClassName} >
      {children}
    </h2>
  );
};

export default Text;
