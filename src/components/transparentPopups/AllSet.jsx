import React from "react";
import { Heading, TransparentPopup } from "../index";
import tick from "../../assets/tick.png";


const AllSet = () => {
  return (
    <TransparentPopup>
      <div style={{ display: "flex", margin: "20px 0px" }}>
        <img src={tick} alt="tick" style={{ width: "80px", height: "80px " }} />
        <h3 style={{ fontFamily: "Bebas Neue", fontSize: "28px", color: "#fff", fontWeight: 300 }}>
          All set! your estimated completion time is
        </h3>
      </div>
      <Heading size="mid" color="yellow">
        2 HOURS 30 MINUTES
      </Heading>
    </TransparentPopup>
  );
};

export default AllSet;
