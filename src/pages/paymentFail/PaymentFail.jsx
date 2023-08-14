import { PaymentCancelPopup } from "../../components";
import Styles from "./paymentFail.module.css";

const PaymentFail = () => {
  return (
    <section className={Styles.root}>
      <PaymentCancelPopup />
    </section>
  );
};

export default PaymentFail;
