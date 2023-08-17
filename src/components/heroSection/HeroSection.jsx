import styles from "./heroSection.module.css";
import towel from "../../assets/towel.png";

import { GlowHeading } from "../index";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleTabStart = () => {
    navigate('/enter-number');
  }
  return (
    <section className={styles.box}>
      <h2 className={styles.heading}>
        {" "}
        LAUNDRY ON DEMAND <br /> PRESENTS{" "}
      </h2>
      <GlowHeading rotate={true} >
        The Mat
        </GlowHeading>
      <h2 className={styles.GlowHeading} onClick={handleTabStart}>
        TAP HER TO <br /> START
      </h2>
      <img src={towel} alt="towel-pic" className={styles.image} />
    </section>
  );
};

export default HeroSection;
