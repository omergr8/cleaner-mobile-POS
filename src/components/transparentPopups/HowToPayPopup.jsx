import React from "react";
import cash from "../../assets/cash.png";
import card from "../../assets/card.png";
import { Heading, TransparentPopup } from "../index";

const HowToPayPopup = () => {
  const handleCashNavigate = {};
  const handleCardNavigate = {};
  return (
    <TransparentPopup>
      <div style={{ margin: "-30px 0px 90px" }}>
        <Heading size="mid" color="white">
          $19.49
        </Heading>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0px" }}>
        <div>
          <p style={{ fontFamily: "Bebas Neue", fontSize: "20px", color: "#fff" }}>CARD</p>
          <img
            src={card}
            alt="tick"
            style={{ width: "100px", height: "auto", cursor: "pointer" }}
            onClick={handleCardNavigate}
          />
        </div>
        <div>
          <p style={{ fontFamily: "Bebas Neue", fontSize: "20px", color: "#fff" }}>CASH</p>
          <img
            src={cash}
            alt="tick"
            style={{ width: "100px", height: "auto", cursor: "pointer" }}
            onClick={handleCashNavigate}
          />
        </div>
      </div>
    </TransparentPopup>
  );
};

export default HowToPayPopup;
