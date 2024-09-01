import React, { useEffect, useState } from "react";
import "./ServiceInfo.css";
import HeaderPage from "../../Components/HeaderPage/HeaderPage";
import Footer from "../../Components/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";
import HeadersSection from "../../Components/HeadersSection/HeadersSections";
import ReadyToBuy from "../../Components/ReadyToBuy/ReadyToBuy";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Atropos from 'atropos/react';




export default function ServiceInfo() {

  const { serviceName } = useParams();
  const [ourlisting, setOurlisting] = useState([]);
  const [orderedList, setOrderedList] = useState([]);
  const [shownOurListing, setShownOurListing] = useState([]);
  const [status, setStatus] = useState("defualt");
  const [searchTitle , setSerachTitle] = useState(null)

  
  

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  const changeStatusHandler = (e) => {
    setStatus(e.target.value);
  };

 




  


  return (
    <>
      <HeaderPage pageTitle={serviceName} imgPath='/./Images/real-estate.jpg'>
        <BreadCrumb  prevRout={'services'} prevRoutTo={'/Category-info/services'} currentRout={serviceName} />
      </HeaderPage>
      {/* <Sevicessection /> */}

      <div className="bg-listing" style={{ marginTop: "9rem" }}>
        <div className="container">
          <div className="row">
            <HeadersSection
              className="mt-5"
              title="Featured Listings"
              desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
            />

            <div className="row justify-content-center align-items-center mt-5">
              <div className="col-lg-3 position-relative ">
                <select
                  className="filter-option p-3 px-5 "
                  style={{ borderRadius: "99px" }}
                  
                >
                  <option value="defualt">default</option>
                  <option value="free">free properties</option>
                  <option value="first">first Properties</option>
                  <option value="last">last Properties</option>
                  <option value="expensive">
                    expensive Properties
                  </option>
                  <option value="cheap">cheap Properties</option>
                </select>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className="col-lg-2">
               <div className="d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-end">
                {/* <BiSearchAlt className="position-absolute icon-search"  /> */}
               <input type="text" className="search-property p-3 px-5 position-relative" placeholder="search property" /> 
                </div>
               </div>
              </div>
            </div>
           
            <div className="row mt-5">
            
              
            </div>
          
          </div>
        </div>
      </div>
      
      <ReadyToBuy title='Ready to buy ?'  />
      <Footer />
    </>
  );
}
