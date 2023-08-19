import styles from "./popup.module.css";
import { Heading, TextBtn } from "../index";
import { useNavigate } from "react-router-dom";

const Popup = () => {
  const navigate = useNavigate();

  const handleNotCancel = () => {
    navigate("/load-bin");
  };

  return (
    <div className={` ${styles.boxWrapper}`}>
      <div className={styles.box}>
        <Heading size="mid" color="white">
          CANCEL
        </Heading>
        <div style={{ margin: "30px 10px" }}>
          <Heading size="small" color="yellow">
            Are you sure you want to cancel?
          </Heading>
        </div>
        <Heading size="small" color="white">
          If you cancel your current order will be cancelled and you will be logged out.
        </Heading>
        <div className={` ${styles.btnWrapper}`}>
          <TextBtn size="sm" textColor="red" backgroundColor="noBg">
            CANCEL
          </TextBtn>
          <TextBtn size="sm" textColor="green" backgroundColor="noBg" onClick={handleNotCancel}>
            DON'T CANCEL
          </TextBtn>
        </div>
      </div>
    </div>
  );
};

export default Popup;
