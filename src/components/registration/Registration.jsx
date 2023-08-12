import styles from "./registration.module.css";
import { TextInputs } from "../index";

const Registration = () => {
  return (
    <section className={` ${styles.box}`}>
      <div className={`${styles.wrapper}`}>
        <h2 className={`${styles.heading}`}>REGISTRATION</h2>
        <TextInputs />
      </div>
    </section>
  );
};

export default Registration;
