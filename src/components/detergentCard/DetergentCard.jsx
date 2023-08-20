/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { TextBtn } from "../index";
import styles from "./detergentCard.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const DetergentCard = (props) => {
  const { subCategories } = props;
  const navigate = useNavigate();

  const handleConfirmSelection = () => {
    navigate("/finish-pay");
  };
  return (
    <div className={styles.box}>
      <h2 className={styles.heading}>{subCategories?.title}</h2>
      <div className={styles.detergentTable}>
        <div className={styles.wrapperList}>
          <p className={styles.title}>{subCategories?.subCategoriesData[0]?.title}</p>
          <h6 className={styles.price}>{subCategories?.subCategoriesData[0]?.price}</h6>
        </div>
        <div className={styles.wrapperList}>
          <p className={styles.title}>{subCategories?.subCategoriesData[1]?.title}</p>
          <h6 className={styles.price}>{subCategories?.subCategoriesData[1]?.price}</h6>
        </div>
        <div className={styles.wrapperList}>
          <p className={styles.title}>{subCategories?.subCategoriesData[2]?.title}</p>
          <h6 className={styles.price}>{subCategories?.subCategoriesData[2]?.price}</h6>
        </div>
      </div>

      <TextBtn size="lg" backgroundColor="noBg" textColor="white" onClick={handleConfirmSelection}>
        <AiOutlineCheckCircle /> Confirm
      </TextBtn>
    </div>
  );
};

export default DetergentCard;
