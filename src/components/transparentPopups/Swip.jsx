import React from 'react'
import { Heading, TextBtn, TransparentPopup } from "../index";
import { BsChevronDoubleRight } from 'react-icons/bs';

const Swip = () => {
  return (
    <TransparentPopup>
        <div>
        <TextBtn size="xl" backgroundColor="noBg" textColor="light" border='borderLight'>
            SWIPE <BsChevronDoubleRight />
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
      </TransparentPopup>
  )
}

export default Swip
