import { Heading, TextBtn } from "../../components";
import bucket from "../../assets/bucket.png";
import styles from "./greatJob2.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GreatJob2 = () => {
  const [imageData, setImageData] = useState([
    {
      id: 0,
      img: bucket,
      count: 82,
    },
    {
      id: 1,
      img: bucket,
      count: 83,
    },
  ]);
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/ultimate-clean");
  };
  const handleCancelBin = () => {
    navigate("/cancel-popup");
  };
  const dublicateImageData = () => {
    const newId = imageData.length;
    const newCount = imageData[imageData.length - 1].count + 1;
    const newImageData = [...imageData, { id: newId, img: bucket, count: newCount }];
    setImageData(newImageData);
    console.log("imageData", imageData);
  };
  return (
    <section className={`${styles.box}`}>
      <Heading size="large">GREAT JOB</Heading>
      <h6 className={`${styles.para}`}>
        You have <span>one bin</span> loaded. Add another by tapping below or tap done to choose{" "}
        <span className={styles.greenSpan}>wash cycle.</span>
      </h6>
      {imageData.length < 2 ? (
        <>
          <img
            src={bucket}
            alt="bucket"
            className={` ${styles.image}`}
            style={{ marginTop: "80px" }}
          />
          <h6 className={`${styles.number}`}>#{imageData[0].count}</h6>
        </>
      ) : (
        <div className={styles.imageWrapper}>
          {imageData.map((data, index) => (
            <div key={index}>
              <img src={data.img} alt="bucket" className={`  ${styles.image}`} />
              <h6 className={`${styles.smallNumber}`}>#{data.count}</h6>
            </div>
          ))}
        </div>
      )}

      <div className={styles.anotherBtn}>
        <TextBtn size="xl" textColor="yellow" backgroundColor="noBg" onClick={dublicateImageData}>
          ADD ANOTHER
        </TextBtn>
      </div>
      <div className={` ${styles.btnWrapper}`}>
        <TextBtn size="md" textColor="white" backgroundColor="noBg" onClick={handleAccept}>
          DONE
        </TextBtn>
        <TextBtn size="md" textColor="white" backgroundColor="noBg" onClick={handleCancelBin}>
          CANCEL
        </TextBtn>
      </div>
    </section>
  );
};

export default GreatJob2;
