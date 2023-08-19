import { CancelBtn, GlowHeading, Heading, ProductsSelect, HowToPayPopup } from "../../components";
import styles from "./howToPay.module.css";
import { useStore, useBuckettStore } from "../../store/productStore";

const bucketData = useBuckettStore.getState();

const HowToPay = () => {
  const productData = useStore((state) => state.products);

  return (
    <section className={styles.box}>
      <Heading size="large" gap="no">
        THE
      </Heading>
      <GlowHeading rotate={false} size="medium">
        Ultimate Clean
      </GlowHeading>
      <Heading size="mid" gap="no">
        HOW DO YOU WANNT TO PAY
      </Heading>
      <div style={{ height: "15px" }}></div>
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
        <ProductsSelect productsData={productData} apply="false" />
        <ProductsSelect productsData={productData} apply="false" />
      </div>

      <div className={styles.cancelBtn}>
        <CancelBtn backgroundColor="whiteBg" textColor="gray">
          Cancel
        </CancelBtn>
      </div>
      <HowToPayPopup />
    </section>
  );
};

export default HowToPay;
