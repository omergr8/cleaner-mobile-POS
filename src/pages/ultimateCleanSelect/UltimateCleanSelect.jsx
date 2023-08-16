import { CancelBtn, GlowHeading, Heading, Products, ProductsSelect } from "../../components";
import styles from "./ultimateCleanSelect.module.css";
import bucket from "../../assets/bucket.png";
import yellowReload from "../../assets/yellow-reload.png";
import blueReload from "../../assets/blue-reload.png";
import { useState } from "react";

const UltimateCleanSelect = () => {
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
  const [productsData, setProductsData] = useState([
    {
      id: 0,
      title: "QUICK $8",
      subCategories: [
        {
          id: 0,
          title: "Detergent-Mountain Fresh",
          icon: yellowReload,
          type: "CHANGE",
        },
        {
          id: 1,
          title: "Cold Water",
          icon: yellowReload,
          type: "CHANGE",
        },
        {
          id: 2,
          title: "Time Dry 45 min",
          icon: blueReload,
          type: "CHANGE",
        },
        {
          id: 3,
          title: "Softner-None",
          icon: yellowReload,
        },
      ],
    },
    {
      id: 1,
      title: "Colors $9",
      subCategories: [
        {
          id: 0,
          title: "Detergent-Mountain Fresh",
          icon: yellowReload,
          type: "CHANGE",
        },
        {
          id: 1,
          title: "Warm Water",
          icon: yellowReload,
          type: "CHANGE",
        },
        {
          id: 2,
          title: "Very Dry",
          icon: blueReload,
          type: "CHANGE",
        },
        {
          id: 3,
          title: "Softner-Downey",
          icon: yellowReload,
        },
      ],
    },
    {
      id: 2,
      title: "Whites$10",
      subCategories: [
        {
          id: 0,
          title: "Detergent-Mountain Fresh",
          icon: yellowReload,
          type: "CHANGE",
        },
        {
          id: 1,
          title: "Warm Water",
          icon: yellowReload,
          type: "CHANGE",
        },
        {
          id: 2,
          title: "Very Dry",
          icon: blueReload,
          type: "CHANGE",
        },
        {
          id: 3,
          title: "Softner-Downey",
          icon: yellowReload,
        },
      ],
    },
    {
      id: 3,
      title: "Deep $12",
      subCategories: [
        {
          id: 0,
          title: "Detergent-Mountain Fresh",
          icon: yellowReload,
          type: "CHANGE",
        },
        {
          id: 1,
          title: "Warm Water",
          icon: yellowReload,
          type: "CHANGE",
        },
        {
          id: 2,
          title: "Very Dry",
          icon: blueReload,
          type: "CHANGE",
        },
        {
          id: 3,
          title: "Softner-Downey",
          icon: yellowReload,
        },
      ],
    },
  ]);
  return (
    <section className={styles.box}>
      <Heading size="large" gap="no">
        THE
      </Heading>
      <GlowHeading rotate={false} size="medium">
        Ultimate Clean
      </GlowHeading>
      <div className={styles.imageWrapper}>
        {imageData.map((data, index) => (
          <div key={index}>
            <p className={styles.loadText}>Load Bin</p>
            <img src={data.img} alt="bucket" className={`  ${styles.image}`} />
            <h6 className={`${styles.smallNumber}`}>#{data.count}</h6>
          </div>
        ))}
      </div>
      <div className={styles.productsWrapper}>
        <ProductsSelect productsData={productsData} />
        <Products productsData={productsData} />
      </div>
      <div className={styles.cancelBtn}>
        <CancelBtn backgroundColor="yellowBg" textColor="gray">
          Cancel
        </CancelBtn>
      </div>
    </section>
  );
};

export default UltimateCleanSelect;
