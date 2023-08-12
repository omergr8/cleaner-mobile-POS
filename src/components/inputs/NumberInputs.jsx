/* eslint-disable react/prop-types */
import styles from "./numberInputs.module.css";

const NumberInputs = ({ phoneNumber, setPhoneNumber }) => {
  const handleNumberPress = (number) => {
    setPhoneNumber(phoneNumber + number);
  };

  const buttonValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className={styles["phone-number-dial-pad"]}>
      <div className={styles["dial-pad"]}>
        {buttonValues.map((value) => (
          <button
            key={value}
            className={styles["dial-button"]}
            onClick={() => {
              handleNumberPress(value);
            }}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumberInputs;
