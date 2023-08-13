/* eslint-disable react/prop-types */
import styles from "./heading.module.css";

const Text = ({ size, children, color }) => {
  const textClassName = `${styles.text} ${styles[size]} ${styles[color]}`;

  return (
    <h2 className={textClassName} >
      {children}
    </h2>
  );
};

export default Text;
