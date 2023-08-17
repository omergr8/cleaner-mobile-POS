/* eslint-disable react/prop-types */
import styles from "./textBtn.module.css";
import { Button as BootstrapButton } from "react-bootstrap";

const TextBtn = (props) => {
  const { children, onClick, variant, size, textColor, backgroundColor, border } = props;
  const buttonClassName = `${styles.button} ${styles[variant]} ${styles[textColor]} ${styles[border]} ${styles[backgroundColor]} ${styles[size]}`;

  // variant=""
  // size=" xs- sm - lg - xl "
  // textColor=" red - green - yellow - white - light - gray "
  // backgroundColor=" whiteBg - yellowBg - noBg "
  // * Example BTn
  // <TextBtn size="xl" textColor="gray" backgroundColor="yellowBg">
  //   Dark Gray
  // </TextBtn>;

  return (
    <BootstrapButton className={buttonClassName} onClick={onClick}>
      {children}
    </BootstrapButton>
  );
};

export default TextBtn;
