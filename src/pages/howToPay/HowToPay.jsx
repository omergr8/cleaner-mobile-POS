import {
  CancelBtn,
  GlowHeading,
  Heading,
  ProductsSelect,
  TextBtn,
  TransparentPopup,
} from "../../components";
import styles from "./howToPay.module.css";
import bucket from "../../assets/bucket.png";
import yellowReload from "../../assets/yellow-reload.png";
import blueReload from "../../assets/blue-reload.png";
import { useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import tick from "../../assets/tick.png";
import cash from "../../assets/cash.png";
import card from "../../assets/card.png";
import visa from "../../assets/visa.png";
import HowToPayPopup from "../../components/transparentPopups/HowToPayPopup";

const HowToPay = () => {
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
      <Heading size="mid" gap="no">
        HOW DO YOU WANNT TO PAY
      </Heading>
      <div style={{ height: "15px" }}></div>
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
        <ProductsSelect productsData={productsData} apply="false" />
        <ProductsSelect productsData={productsData} apply="false" />
      </div>

      <div className={styles.cancelBtn}>
        <CancelBtn backgroundColor="whiteBg" textColor="gray">
          Cancel
        </CancelBtn>
      </div>

      {/* How do pay */}
      <HowToPayPopup />

      {/* use Default Card */}
      {/* <TransparentPopup>
        <div style={{ margin: "-10px 0px 40px" }}>
          <Heading size="mid" color="white">
            Use default card?
          </Heading>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", margin: "20px 0px" }}>
          <img src={visa} alt="tick" style={{ width: "50px", height: "auto" }} />
          <p style={{ fontFamily: "Bebas Neue", fontSize: "20px", color: "#fff", marginBottom: 0 }}>
            Ending 4242
          </p>
          <p
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "20px",
              color: "#FAD02C",
              marginBottom: 0,
            }}>
            Default
          </p>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", margin: "40px 0px" }}>
          <TextBtn size="sm" backgroundColor="noBg" textColor="light" border="borderLight">
            SWIPE <BsChevronDoubleRight />
          </TextBtn>
          <p style={{ fontFamily: "Bebas Neue", fontSize: "20px", color: "#fff", marginBottom: 0 }}>
            New
          </p>
        </div>
        <Heading size="mid" color="white">
          $19.49
        </Heading>
        <TextBtn size="xl" textColor="yellow" backgroundColor="noBg">
          CONFIRM
        </TextBtn>
      </TransparentPopup> */}

      {/* Last Transparent Popup */}
      {/* <TransparentPopup>
        <div style={{ display: "flex", margin: '20px 0px' }}>
          <img src={tick} alt="tick" style={{ width: "80px", height: "80px " }} />
          <h3
            style={{ fontFamily: "Bebas Neue", fontSize: "28px", color: "#fff", fontWeight: 300 }}>
            All set! your estimated completion time is
          </h3>
        </div>
        <Heading size="mid" color="yellow">
          2 HOURS 30 MINUTES
        </Heading>
      </TransparentPopup> */}

      {/* Card - Swipe */}
      {/* <TransparentPopup>
        <div className={styles.srapWrapper}>
        <TextBtn size="xl" backgroundColor="noBg" textColor="light" border='borderLight'>
            SWIPE <BsChevronDoubleRight/>
          </TextBtn>
          <div style={{height: '15px'}}></div>
        <Heading size="small" color="white">
          SWIPE OR TAP CARD BELOW
        </Heading>
        <div style={{height: '85px'}}></div>
        <Heading size="medium" color="blue">
          $19.49
        </Heading>
        </div>
      </TransparentPopup> */}

      {/* cash - PLEASE SEE CASHIER */}
      {/* <TransparentPopup>
        <Heading size="mid" color="yellow">
          PLEASE SEE CASHIER
        </Heading>
      </TransparentPopup> */}
    </section>
  );
};

export default HowToPay;
