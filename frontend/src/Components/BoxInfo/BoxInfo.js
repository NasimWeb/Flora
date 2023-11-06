import React from "react";
import "./BoxInfo.css";

export default function BoxInfo() {
  return (
    <div className="row justify-content-center align-items-center mt-4">
      <div className="col-lg-4 box-info d-flex justify-content-center align-items-center flex-column gap-10">
        <div className="Home-Icon mb-2">
          <img src="./Images/GroupHome.png" />
        </div>
        <p className="title-info">Search Apartment</p>
        <p className="desc-info text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          tempus felis vitae.
        </p>
      </div>
      <div className="col-lg-4 bg-blue box-info d-flex justify-content-center align-items-center flex-column gap-10">
        <div className="Home-Icon mb-2">
          <img src="./Images/GroupBlueHomeIcon.png" />
        </div>
        <p className="title-info text-white text-center">Select Apartment</p>
        <p className="desc-info text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          tempus felis vitae.
        </p>
      </div>
      <div className="col-lg-4 box-info d-flex justify-content-center align-items-center flex-column gap-10">
        <div className="Home-Icon mb-2">
          <img src="./Images/GroupHome.png" />
        </div>
        <p className="title-info">Confirm Apartment</p>
        <p className="desc-info text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          tempus felis vitae.
        </p>
      </div>
    </div>
  );
}
