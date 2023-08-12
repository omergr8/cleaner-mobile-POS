import { Form } from "react-bootstrap";
import styles from "./textInputs.module.css";
import { useState } from "react";

const TextInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleInputsSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      firstName,
      lastName,
      phoneNumber,
      zipCode,
    });
  };
  const handleZipCodeKeyPress = (e) => {
    if (e.key === "Enter") {
      handleInputsSubmit(e);
    }
  };
  return (
    <div className={`${styles.inputsWrapper}`}>
      <Form onSubmit={handleInputsSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="First Name"
            className={`mb-3 ${styles["center-placeholder"]}`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Last Name"
            className={`mb-3 ${styles["center-placeholder"]}`}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Control
            type="number"
            placeholder="Phone Number"
            className={`mb-3 ${styles["center-placeholder"]}`}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Zip Code"
            className={` ${styles["center-placeholder"]}`}
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            onKeyPress={handleZipCodeKeyPress}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default TextInputs;
