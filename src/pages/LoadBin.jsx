import { Heading, TextBtn } from "../components/index";
import styles from "./loadBin.module.css";
import binVideo from "../assets/da6ef29703.mp4";
import bucket from "../assets/bucket.png";
import { useState } from "react";

const LoadBin = () => {
  const [count, setCount] = useState(1);
  return (
    <section className={`${styles.box}`}>
      <Heading size="large">PLEASE LOAD BIN</Heading>
      <div style={{ margin: "15px" }}>
        <Heading size="medium" color="yellow">
          Please make sure the lid is completely closed
        </Heading>
      </div>
      {count === 0 ? (
        <div className={`${styles.videoWrapper}`}>
          <video controls width="340" height="360" autoPlay loop className={styles.video}>
            <source src={binVideo} type="video/mp4" />
          </video>
        </div>
      ) : (
        <>
          <div className={`${styles.videoWrapper} ${count > 0 ? styles.minivideo : ""}`}>
            <video controls width="340" height="360" autoPlay loop className={styles.video}>
              <source src={binVideo} type="video/mp4" />
            </video>
          </div>
          <div className={`${styles.outerWrapper}`}>
            <div className={styles.binWrapper}>
              <p className={styles.loadText}>Load Bin</p>
              <img src={bucket} alt="bucket" className={` ${styles.bucketImage}`} />
              <h6 className={`${styles.number}`}>#82</h6>
            </div>
          </div>
        </>
      )}

      <div className={` ${styles.btnWrapper}`}>
        <TextBtn size="md" textColor="green" backgroundColor="noBg">
          DONE
        </TextBtn>
        <TextBtn size="md" textColor="red" backgroundColor="noBg">
          CANCEL
        </TextBtn>
      </div>
    </section>
  );
};

export default LoadBin;
