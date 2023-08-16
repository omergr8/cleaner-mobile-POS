/* eslint-disable react/prop-types */
import styles from "./productsSelect.module.css";
import yellowReload from "../../assets/yellow-reload.png";
import blueReload from "../../assets/blue-reload.png";
import { Form } from "react-bootstrap";
import { useState } from "react";
import TextBtn from "../textBtn/TextBtn";

const ProductsSelect = () => {
  // const { productsData } = props; // Corrected destructuring
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.root}>
      <div className={styles.productWrapper}>
        <h2 className={styles.title}>QUICK $8</h2>
        <div className={styles.subCategoryWrapper}>
          <div className={styles.textWrapper}>
            <p className={styles.para}>Detergent-Mountain Fresh</p>
            <img src={yellowReload} alt="reload-icon" className={styles.reloadImg} />
            <p className={styles.type}>CHANGE</p>
          </div>
        </div>
        <div className={styles.subCategoryWrapper}>
          <div className={styles.textWrapper}>
            <p className={styles.para}>Cold Water</p>
            <img src={yellowReload} alt="reload-icon" className={styles.reloadImg} />
            <p className={styles.type}>CHANGE</p>
          </div>
        </div>
        <div className={styles.subCategoryWrapper}>
          <div className={styles.textWrapper}>
            <p className={styles.para}>Time Dray 45 min</p>
            <img src={yellowReload} alt="reload-icon" className={styles.reloadImg} />
            <p className={styles.type}>CHANGE</p>
          </div>
        </div>
        <div className={styles.subCategoryWrapper}>
          <div className={styles.textWrapper}>
            <p className={styles.para}>Softner-None</p>
            <img src={yellowReload} alt="reload-icon" className={styles.reloadImg} />
            <p className={styles.type}>CHANGE</p>
          </div>
        </div>
        <div className={styles.Bottomwrapper}>
          <TextBtn size="sm" backgroundColor="whiteBg" textColor="gray">
            CONFIRM
          </TextBtn>
          <Form className="mt-3 w-75">
            <Form.Check
              type="checkbox"
              id="checkboxId"
              label="apply to all"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProductsSelect;
