import { Heading, TextBtn } from "../components";
import bucket from "../assets/bucket.png";
import styles from "./greatJob.module.css";

const GreatJob = () => {
  return (
    <section className={`${styles.box}`}>
      <Heading size="large">GREAT JOB</Heading>
      <h6 className={`${styles.para}`}>
        You have <span>one bin</span> loaded. Add another by tapping below or tap done to choose{" "}
        <span className={styles.greenSpan}>wash cycle.</span>
      </h6>
      <img src={bucket} alt="bucket" className={` ${styles.image}`} />
      <h6 className={`${styles.number}`}>#82</h6>

      <div className={styles.anotherBtn}>
        <TextBtn size="xl" textColor="yellow" backgroundColor="noBg">
          ADD ANOTHER
        </TextBtn>
      </div>
      <div className={` ${styles.btnWrapper}`}>
        <TextBtn size="sm" textColor="white" backgroundColor="noBg">
          DONE
        </TextBtn>
        <TextBtn size="sm" textColor="white" backgroundColor="noBg">
          CANCEL
        </TextBtn>
      </div>
    </section>
  );
};

export default GreatJob;
