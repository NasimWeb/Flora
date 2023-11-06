import React from "react";
import "./HeadersSection.css";

export default function HeadersSections({title , desc}) {
  return (
    <>
      <div className="container" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <p className="title mb-3">{title}</p>
      <p className="desc w-65 mx-auto">
        {desc}
      </p>
      </div>
    </>
  );
}
