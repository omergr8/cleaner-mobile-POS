import { Popup } from "../../components";
import styles from "./cancelPopup.module.css";

const CancelPopup = () => {
  return (
    <section className={`${styles.box}`}>
      <Popup/>
    </section>
  );
};

export default CancelPopup;
