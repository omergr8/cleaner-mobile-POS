import React from 'react'
import visa from "../../assets/visa.png";
import { Heading, TextBtn, TransparentPopup } from "../index";
import { BsChevronDoubleRight } from 'react-icons/bs';

const DdfaultCard = () => {
  return (
    <TransparentPopup>
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
      </TransparentPopup> 
  )
}

export default DdfaultCard
