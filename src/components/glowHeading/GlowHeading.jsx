/* eslint-disable react/prop-types */
import styles from "./glowHeading.module.css";

const GlowHeading = (props) => {
  const { rotate, children, size} = props;
  return <h2 className={`${styles.glowHeading}  ${rotate ? styles.rotated : ""} ${styles[size]}`}>{children}</h2>;
};

export default GlowHeading;
