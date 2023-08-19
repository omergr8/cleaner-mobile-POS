/* eslint-disable react/prop-types */
import styles from "./bucketCount.module.css";
import bucket from "../../assets/bucket.png";

const BucketCount = ({ product }) => {
  return (
    <div className={styles.singleImgWrapper}>
      <div>
        <p className={styles.loadText}>Load Bin</p>
        <img src={bucket} alt="bucket" className={styles.mobileImage} />
        <h6 className={styles.smallNumber}>#
        {product.count}
        </h6>
      </div>
    </div>
  );
};

export default BucketCount;
