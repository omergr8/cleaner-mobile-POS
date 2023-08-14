import styles from "./popup.module.css";
import { Heading, TextBtn } from "../index";

const PaymentCancelPopup = () => {
  return (
    <div className={` ${styles.boxWrapper}`}>
      <div className={styles.box}>
        <Heading size="mid" color="white">
        PAYMENT ERROR
        </Heading>
        <div style={{margin: '30px 10px'}}>
        <Heading size="small" color="white">
        THERE IS AND ERROR WITH YOUR PAYMENT METHOD. PLEASE TRY A DIFFERENT CARD OR PAYMENT METHOD.
        </Heading>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelPopup;
