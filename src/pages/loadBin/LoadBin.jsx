import { Heading, TextBtn } from "../../components/index";
import styles from "./loadBin.module.css";
import binVideo from "../../assets/da6ef29703.mp4";
import bucket from "../../assets/bucket.png";
import { useNavigate } from "react-router-dom";
import { useStore, useBuckettStore } from "../../store/productStore";

const LoadBin = () => {
  const navigate = useNavigate();

  const bucketData = useBuckettStore.getState().bucketData;
  const productData = useStore((state) => state.products);

  const handleLoadBin = () => {
    useBuckettStore.setState({
      bucketData: [{
        id: 0,
        img: bucket,
        count: 82,
      }]
    });
    navigate("/great-job");
  };
  const handleCancelBin = () => {
    navigate("/cancel-popup");
  };

  console.log("bucketData", bucketData);
  return (
    <section className={`${styles.box}`}>
      <Heading size="large">PLEASE LOAD BIN</Heading>
      <div style={{ margin: "15px" }}>
        <Heading size="medium" color="yellow">
          Please make sure the lid is completely closed
        </Heading>
      </div>
      {bucketData.length === 0 ? (
        <div className={`${styles.videoWrapper}`}>
          <video width="340" height="360" autoPlay loop className={styles.video} controls="hidden">
            <source src={binVideo} type="video/mp4" />
          </video>
        </div>
      ) : (
        <>
          <div
            className={`${styles.videoWrapper} ${bucketData.length > 0 ? styles.minivideo : ""}`}>
            <video
              width="340"
              height="360"
              autoPlay
              loop
              className={styles.video}
              controls="hidden">
              <source src={binVideo} type="video/mp4" />
            </video>
          </div>
          {bucketData.length === 0 ? (
            <></>
          ) : (
            <div className={styles.binsList}>
              {bucketData.map((data, index) => (
                <div className={`${styles.outerWrapper}`} key={index}>
                  <div className={styles.binWrapper}>
                    <p className={styles.loadText}>Load Bin</p>
                    <img src={data.img} alt="bucket" className={` ${styles.bucketImage}`} />
                    <h6 className={`${styles.number}`}>#{data.count}</h6>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {bucketData.length === 0 ? (
        <div className={` ${styles.btnWrapper}`}>
          <TextBtn size="md" textColor="green" backgroundColor="noBg" onClick={handleLoadBin}>
            DONE
          </TextBtn>
          <TextBtn size="md" textColor="red" backgroundColor="noBg" onClick={handleCancelBin}>
            CANCEL
          </TextBtn>
        </div>
      ) : (
        <div className={` ${styles.btnWrapper}`}>
          <TextBtn size="md" textColor="white" backgroundColor="noBg" onClick={handleLoadBin}>
            DONE
          </TextBtn>
          <TextBtn size="md" textColor="white" backgroundColor="noBg" onClick={handleCancelBin}>
            CANCEL
          </TextBtn>
        </div>
      )}
    </section>
  );
};

export default LoadBin;
