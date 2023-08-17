import { useNavigate } from "react-router-dom";
import styles from "./scanQR.module.css";
import { BsQrCodeScan } from "react-icons/bs";

const ScanQR = () => {
  const navigate = useNavigate();

  const handleQRCodeClick = () => {
    navigate('/');
  };
  return (
    <section className={styles.box}>
      <h6 className={styles.headingTop}>Welcome James</h6>
      <h2 className={styles.heading}>PLEASE SCAN BIN</h2>

      <BsQrCodeScan className={styles.qrimg} onClick={handleQRCodeClick}/>
    </section>
  );
};

export default ScanQR;
