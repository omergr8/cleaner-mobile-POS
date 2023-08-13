/* eslint-disable react/prop-types */
import styles from './cancelBtn.module.css'
import { Button as BootstrapButton } from "react-bootstrap";

const CancelBtn = (props) => {
  const { children, onClick, textColor, backgroundColor } = props;
  const buttonClassName = `${styles.button} ${styles[textColor]} ${styles[backgroundColor]} `;

  // textColor=" gray "
  // backgroundColor=" white - yellow "
  return (
    <BootstrapButton className={buttonClassName} onClick={onClick}>
      {children}
    </BootstrapButton>
  );
};

export default CancelBtn;
