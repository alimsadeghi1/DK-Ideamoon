import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import toPersianNum from "./toPersianNum";

const TimeCounter = ({  }) => {
  const renderer = ({hours, minutes, seconds}) => {
    return (
      <div className="timer" dir="ltr">
        <div>
          { `${toPersianNum(hours.toString().padStart(2, '0'))} : ${toPersianNum(minutes.toString().padStart(2, '0'))} : ${toPersianNum(seconds.toString().padStart(2, '0'))} ` }
        </div>
        <div dir="rtl">داستان بعدی:</div>
      </div>
    );
  };


  return (
    <Countdown
      date={Date.now() + 10000000}
      renderer={renderer}
      daysInHours
      style={{ fontSize: "20px", fontWeight: "900" }}
    ></Countdown>
  );
}

export default TimeCounter;
