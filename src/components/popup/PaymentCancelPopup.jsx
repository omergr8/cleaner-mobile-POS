import styles from "./popup.module.css";
import { Heading } from "../index";

const PaymentCancelPopup = ({ children }) => {
  return (
    <div className={` ${styles.boxWrapper}`}>
      <div className={styles.box}>
        <Heading size="mid" color="white">
          PAYMENT ERROR
        </Heading>
        <div style={{ margin: "30px 10px" }}>
          <Heading size="small" color="white">
            {children}
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelPopup;
