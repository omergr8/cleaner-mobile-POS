import styles from "./heroSection.module.css";
import towel from "../../assets/towel.png";

import { GlowHeading } from "../index";

const HeroSection = () => {
  return (
    <section className={styles.box}>
      <h2 className={styles.heading}>
        {" "}
        LAUNDRY ON DEMAND <br /> PRESENTS{" "}
      </h2>
      <GlowHeading rotate={true} text="The mat" />
      <h2 className={styles.GlowHeading}>
        TAP HER TO <br /> START
      </h2>
      <img src={towel} alt="towel-pic" className={styles.image} />
    </section>
  );
};

export default HeroSection;
