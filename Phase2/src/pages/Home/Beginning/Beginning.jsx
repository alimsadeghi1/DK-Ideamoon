import React, { useState } from "react";
import image from "../../../assets/images/Shatel.png";
import toPersianNum from "../../../helpers/toPersianNum";
import image2 from "../../../assets/images/Frame 327.png";
import BeginningMobile from "./BeginningMobile";
import BeginningDesktop from "./BeginningDesktop";

const Beginning = () => {
  return (
    <>
      <BeginningDesktop/>
      <BeginningMobile/>
    </>
  );
};

export default Beginning;
