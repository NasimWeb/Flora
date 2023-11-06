import React, { useEffect, useState } from "react";
import "./Category.css";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { useParams } from "react-router-dom";
import ServiceBox from "../../Components/ServiceBox/ServiceBox";
import BecomeARealEstate from "../../Components/BecomeARealEstate/BecomeARealEstate";
import HeaderPage from "../../Components/HeaderPage/HeaderPage";


export default function CategoryInfo() {
  
  const {categoryName} = useParams();

  console.log('category');

  return (
    <>
     <HeaderPage pageTitle={categoryName} imgPath='/./Images/services-header.jpg'>
     <BreadCrumb active={true} prevRout="services" />
     </HeaderPage>
      <div className="categories">
        <div className="container">
          <ServiceBox />
          <BecomeARealEstate />
        </div>
      </div>
      <Footer />
    </>
  );
}
