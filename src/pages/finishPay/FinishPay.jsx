import {
  CancelBtn,
  GlowHeading,
  Heading,
  ProductsSelect,
  TextBtn,
  TransparentPopup,
} from "../../components";
import styles from "./finishPay.module.css";
import { useNavigate } from "react-router-dom";
import { useStore, useBuckettStore } from "../../store/productStore";

const bucketData = useBuckettStore.getState();

const UltimateCleanSelect = () => {
  const navigate = useNavigate();
  const productData = useStore((state) => state.products);

  const handleFinish = () => {
    navigate("/how-to-pay");
  };
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
        <ProductsSelect productsData={productData} apply="false" />
        <ProductsSelect productsData={productData} apply="false" />
      </div>
      <div className={styles.Bottomwrapper}>
        <TextBtn size="lg" backgroundColor="yellowBg" textColor="gray" onClick={handleFinish}>
          FINISH & PAY
        </TextBtn>
      </div>
      <div className={styles.cancelBtn}>
        <CancelBtn backgroundColor="whiteBg" textColor="gray">
          Cancel
        </CancelBtn>
      </div>
      {/* <TransparentPopup>
        <Heading size="mid" color="yellow">
          PLEASE SEE CASHIER
        </Heading>
      </TransparentPopup> */}
    </section>
  );
};

export default UltimateCleanSelect;
