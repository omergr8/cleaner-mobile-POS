import {
  BucketCount,
  CancelBtn,
  DetergentCard,
  GlowHeading,
  Heading,
  Products,
} from "../components";
import styles from "./ultimateClean.module.css";
import { useStore } from "../store/productStore";
import { useState } from "react";
import bucket from "../assets/bucket.png";
import { ProductsSelect } from "../components/index";

const UltimateClean = () => {
  const [selectedProduct, setselectedProduct] = useState({});

  const productData = useStore((state) => state.products);

  return (
    <section className={styles.box}>
      <Heading size="large" gap="no">
        THE
      </Heading>
      <GlowHeading rotate={false} size="medium">
        Ultimate Clean
      </GlowHeading>
      {console.log("selectedProduct ", selectedProduct)}
      <div className={styles.combineProductsWrapper}>
        {productData.map((product, index) => (
          <div className={styles.productsWrapper} key={index}>
            <BucketCount product={product} />
            {selectedProduct !== {} ? (
              <Products
                productsData={product.productData}
                selectedProduct={selectedProduct}
                setselectedProduct={setselectedProduct}
              />
            ) : (
              <ProductsSelect selectedProduct={selectedProduct} />
            )}
          </div>
        ))}
      </div>
      <div className={styles.cancelBtn}>
        <CancelBtn backgroundColor="yellowBg" textColor="gray">
          Cancel
        </CancelBtn>
      </div>
    </section>
  );
};

export default UltimateClean;
