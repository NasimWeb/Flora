import React from "react";
import "./Search.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import HeaderPage from "../../Components/HeaderPage/HeaderPage";
import BreadCrump from "../../Components/BreadCrumb/BreadCrumb";

export default function Search() {
  return (
    <>
      <Navbar />

      <HeaderPage
        pageTitle="search"
        imgPath="/./Images/mt-1446-content-bg-1.jpg"
      >
        <BreadCrump currentRout="search" />
      </HeaderPage>

      <div className="container my-5">
        <div style={{marginBlock : '20px'}}>
        <div className="alert alert-warning " >
          No Result
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
