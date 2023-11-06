import React from "react";
import "./HowWorks.css";
import HeadersSections from "../HeadersSection/HeadersSections";
import BoxInfo from "../BoxInfo/BoxInfo";

export default function HowWorks() {
  return (
    <div  className="how-Works mt-5 overflow-hidden">
      <div className="container " data-aos="zoom-out">
        <HeadersSections 
          title="How it Works"
          desc="Using it can make you sound like you have been studying english for a
        long time. Here’s the challenge"
        />

        <BoxInfo />
      </div>
    </div>
  );
}
