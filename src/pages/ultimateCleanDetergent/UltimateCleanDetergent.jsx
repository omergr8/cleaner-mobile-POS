import { CancelBtn, DetergentCard, GlowHeading, Heading, Products } from "../../components";
import styles from "./ultimateCleanDetergent.module.css";
import { useStore, useBuckettStore } from "../../store/productStore";

const bucketData = useBuckettStore.getState();

const UltimateCleanDetergent = () => {
  const productData = useStore((state) => state.products);

  return (
    <section className={styles.box}>
      <Heading size="large" gap="no">
        THE
      </Heading>
      <GlowHeading rotate={false} size="medium">
        Ultimate Clean
      </GlowHeading>
      <div className={styles.imageWrapper}>
        {bucketData.bucketData.map((data, index) => (
          <div key={index}>
            <p className={styles.loadText}>Load Bin</p>
            <img src={data.img} alt="bucket" className={`  ${styles.image}`} />
            <h6 className={`${styles.smallNumber}`}>#{data.count}</h6>
          </div>
        ))}
      </div>
      <div className={styles.productsWrapper}>
        <DetergentCard productsData={productData} />
        <Products productsData={productData} />
      </div>
      <div className={styles.cancelBtn}>
        <CancelBtn backgroundColor="yellowBg" textColor="gray">
          Cancel
        </CancelBtn>
      </div>
    </section>
  );
};

export default UltimateCleanDetergent;
