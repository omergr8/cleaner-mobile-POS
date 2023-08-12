import { Form } from "react-bootstrap";
import { NumberInputs } from "../components";
import styles from "./enterNumber.module.css";
import { useState } from "react";

const EnterNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleNumberPress = (e) => {
    e.preventDefault();
  };
  return (
    <section className={` ${styles.box}`}>
      <div className={`${styles.formWrapper}`}>
        <Form onSubmit={handleNumberPress}>
          <h2 className={` ${styles.heading}`}>ENTER PHONE NUMBER</h2>
          <Form.Control
            type="number"
            placeholder="Enter Number"
            className={`${styles.numberInput}`}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <NumberInputs phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
        </Form>
      </div>
    </section>
  );
};

export default EnterNumber;
