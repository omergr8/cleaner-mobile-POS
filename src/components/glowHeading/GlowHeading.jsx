/* eslint-disable react/prop-types */
import styles from "./glowHeading.module.css";

const GlowHeading = (props) => {
  const { rotate, text } = props;
  return <h2 className={`${styles.glowHeading}  ${rotate ? styles.rotated : ""}`}>{text}</h2>;
};

export default GlowHeading;
