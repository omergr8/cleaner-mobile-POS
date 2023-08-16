import styles from "./transparentPopup.module.css";

const TransparentPopup = ({ children }) => {
  return (
    <div className={` ${styles.boxWrapper}`}>
      <div className={styles.box}>
        <div style={{ margin: "30px 10px" }}>{children}</div>
      </div>
    </div>
  );
};

export default TransparentPopup;
