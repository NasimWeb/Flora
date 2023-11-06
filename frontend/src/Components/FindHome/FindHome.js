import React from "react";
import "./FindHome.css";
import HeadersSection from "../HeadersSection/HeadersSections";
import LeftInfoBoxHome from "../LeftInfoBoxHome/LeftInfoBoxHome";
import RighttInfoBoxHome from "../RighttInfoBoxHome/RighttInfoBoxHome";
import Atropos from 'atropos/react';


export default function FindHome() {

  return (
    <div className="find-home">
      <div className="container">
        <HeadersSection
          title="We will help you to find Dream Home"
          desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
        <div className="row flex-column mt-5">
           <div className="col-lg-10 text-end align-self-end position-relative"> 
           <Atropos shadow={false}>
           <img className="img-fluid" src="./Images/Rectangle 4102.png" />
           </Atropos>
           <LeftInfoBoxHome  price='$2000/month' title='Apartment 2500 sqft' location='1901 Thornridge Cir. Shiloh, Hawaii 81063' beds = {2} baths = {2} parking={1} />
           </div>
        </div>

        <div className="row flex-column mt-5">
           <div className="col-lg-10 text-end align-self-start position-relative"> 
           <Atropos shadow={false}>
           <img className="img-fluid" src="./Images/Rectangle 4103.png"/>
            </Atropos>
           <RighttInfoBoxHome price='$2000/month' title='Apartment 2500 sqft' location='1901 Thornridge Cir. Shiloh, Hawaii 81063' beds = {2} baths = {2} parking={1}  />
           </div>
        </div>

      </div>
    </div>
  );
}
