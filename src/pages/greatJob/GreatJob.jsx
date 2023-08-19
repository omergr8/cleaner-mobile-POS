import { Heading, TextBtn } from "../../components";
import bucket from "../../assets/bucket.png";
import styles from "./greatJob.module.css";
import { useNavigate } from "react-router-dom";
import { useBuckettStore } from "../../store/productStore";


const GreatJob = () => {
  const navigate = useNavigate();
  const bucketData = useBuckettStore.getState().bucketData;

  const handleLoadBin = () => {
    navigate("/load-bin2");
  };

  const handleCancelBin = () => {
    navigate("/cancel-popup");
  };

  const duplicateImageData = () => {
    const lastData = bucketData[bucketData.length - 1];
    const newImageData = [
      ...bucketData,
      { id: lastData.id + 1, img: bucket, count: lastData.count + 1 },
    ];
    useBuckettStore.setState({ bucketData: newImageData });
  };

  return (
    <section className={styles.box}>
      <Heading size="large">GREAT JOB</Heading>
      <h6 className={styles.para}>
        You have <span>one bin</span> loaded. Add another by tapping below or tap done to choose{" "}
        <span className={styles.greenSpan}>wash cycle.</span>
      </h6>

      <div className={bucketData.length < 2 ? styles.singleImageWrapper : styles.imageWrapper}>
        {bucketData.map((data, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={data.img} alt="bucket" className={styles.image} />
            <h6 className={styles.bucketNumber}>#{data.count}</h6>
          </div>
        ))}
      </div>

      <div className={styles.anotherBtn}>
        <TextBtn size="xl" textColor="yellow" backgroundColor="noBg" onClick={duplicateImageData}>
          ADD ANOTHER
        </TextBtn>
      </div>

      <div className={styles.btnWrapper}>
        <TextBtn size="md" textColor="white" backgroundColor="noBg" onClick={handleLoadBin}>
          DONE
        </TextBtn>
        <TextBtn size="md" textColor="white" backgroundColor="noBg" onClick={handleCancelBin}>
          CANCEL
        </TextBtn>
      </div>
    </section>
  );
};

export default GreatJob;
