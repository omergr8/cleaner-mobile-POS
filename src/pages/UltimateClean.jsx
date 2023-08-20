import {
  AllSet,
  BucketCount,
  CancelBtn,
  DdfaultCard,
  DetergentCard,
  GlowHeading,
  Heading,
  HowToPayPopup,
  PaymentError,
  Products,
  SeeCashier,
  Swip,
} from "../components";
import styles from "./ultimateClean.module.css";
import { useStore } from "../store/productStore";
import { useState } from "react";
import bucket from "../assets/bucket.png";
import { ProductsSelect } from "../components/index";

const UltimateClean = () => {
  const [selectedProduct, setselectedProduct] = useState({});
  const [selectSubCategory, setSelectSubCategory] = useState({});
  const [selectedProductStatus, setSelectedProductStatus] = useState(false);
  const [steps, setSteps] = useState("choosepayment");

  const productData = useStore((state) => state.products);

  return (
    <section className={styles.box}>
      <Heading size="large" gap="no">
        THE
      </Heading>
      <GlowHeading rotate={false} size="medium">
        Ultimate Clean
      </GlowHeading>
      {steps === "choosepayment" ? (
        <Heading size="mid" gap="no">
          HOW DO YOU WANT TO PAY?
        </Heading>
      ) : steps === "cash" ? (
        <Heading size="mid" gap="no">
          CASH
        </Heading>
      ) : steps === "card" || steps === "swipe" ? (
        <Heading size="mid" gap="no">
          CARD
        </Heading>
      ) : (
        <></>
      )}

      <div className={styles.combineProductsWrapper}>
        {productData.map((product, index) => (
          <div className={styles.productsWrapper} key={index}>
            <BucketCount product={product} />
            {!selectedProductStatus ? (
              <Products
                productsData={product.productData}
                selectedProduct={selectedProduct}
                setselectedProduct={setselectedProduct}
                setSelectedProductStatus={setSelectedProductStatus}
              />
            ) : (
              <ProductsSelect
                selectedProduct={selectedProduct}
                selectSubCategory={selectSubCategory}
                setSelectSubCategory={setSelectSubCategory}
              />
            )}
          </div>
        ))}
      </div>
      {steps === "choosepayment" ? (
        <HowToPayPopup setSteps={setSteps} />
      ) : steps === "cash" ? (
        <SeeCashier setSteps={setSteps} />
      ) : steps === "card" ? (
        <DdfaultCard setSteps={setSteps} />
      ) : steps === "swipe" ? (
        <Swip setSteps={setSteps} />
      ) : steps === "allSet" ? (
        <AllSet setSteps={setSteps} />
      ) : steps === "error" ? (
        <PaymentError />
      ) : (
        <></>
      )}

      <div className={styles.cancelBtn}>
        <CancelBtn backgroundColor="yellowBg" textColor="gray">
          Cancel
        </CancelBtn>
      </div>
    </section>
  );
};

export default UltimateClean;
