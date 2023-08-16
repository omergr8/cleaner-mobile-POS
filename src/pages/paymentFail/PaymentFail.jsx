import { PaymentCancelPopup } from "../../components";
import Styles from "./paymentFail.module.css";

const PaymentFail = () => {
  return (
    <section className={Styles.root}>
      <PaymentCancelPopup>
      THERE IS AND ERROR WITH YOUR PAYMENT METHOD. PLEASE TRY A DIFFERENT CARD OR PAYMENT METHOD.
        </PaymentCancelPopup>
    </section>
  );
};

export default PaymentFail;
