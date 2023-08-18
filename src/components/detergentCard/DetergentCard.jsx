import { useNavigate } from "react-router-dom";
import { TextBtn } from "../index";
import styles from "./detergentCard.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const DetergentCard = () => {
  const navigate = useNavigate();

  const handleConfirmSelection = () => {
    navigate("/finish-pay");
  };
  return (
    <div className={styles.box}>
      <h2 className={styles.heading}>DETERGENT</h2>
      <div className={styles.detergentTable}>
        <div className={styles.wrapperList}>
          <p className={styles.title}>Mountain Fresh</p>
          <h6 className={styles.price}>Included</h6>
        </div>
        <div className={styles.wrapperList}>
          <p className={styles.title}>Tide-Itchy</p>
          <h6 className={styles.price}>+ $2.00</h6>
        </div>
        <div className={styles.wrapperList}>
          <p className={styles.title}>Gain-Smell Strong</p>
          <h6 className={styles.price}>+ $3.00</h6>
        </div>
      </div>

      <TextBtn size="lg" backgroundColor="noBg" textColor="white" onClick={handleConfirmSelection}>
       <AiOutlineCheckCircle />  Confirm
      </TextBtn>
    </div>
  );
};

export default DetergentCard;
