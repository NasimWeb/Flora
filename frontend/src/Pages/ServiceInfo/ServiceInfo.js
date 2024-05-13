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
    fetch(
      "https://json-server-flora.iran.liara.run/ourListing"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOurlisting(Object.entries(data));
        setOrderedList(Object.entries(data));
      });
  }, []);

  const changeStatusHandler = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    
    switch (status) {

      case "free": {
        const freeProperties = ourlisting.filter(
          (property) => property[1].price === 0
        );
        setOrderedList(freeProperties);
        break;
      }

      case "first": {
        const firstProperties = ourlisting.slice().reverse();
        setOrderedList(firstProperties);
        break;
      }

      case "last": {
        setOrderedList(ourlisting);
        break;
      }

      case "expensive": {
        const expensiveProperties = ourlisting.filter(
          (property) => property[1].price > 10000
        );
        setOrderedList(expensiveProperties);
        break;
      }

      case "cheap": {
        const cheapProperties = ourlisting.filter(
          (property) => property[1].price !== 0 &&  property[1].price < 10000 
        );
        setOrderedList(cheapProperties);
        break;
      }

      case "defualt": {
        setOrderedList(ourlisting);
      }
    }
  }, [status]);



  const searchPropertyHandler = (e) => {
    const inputValueUpperCase = e.target.value.charAt(0).toUpperCase()
    setSerachTitle(inputValueUpperCase)
    
    const filteredSearchProperties = ourlisting.filter(property => property[1].title.includes(inputValueUpperCase))
    setOrderedList(filteredSearchProperties)
  }

  


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
              <div className="col-lg-3">
                <select
                  className="filter-option p-3 px-5"
                  style={{ borderRadius: "99px" }}
                  onChange={(e) => {
                    changeStatusHandler(e);
                  }}
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
              </div>
              <div className="col-lg-2">
               <div className="d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-end">
                {/* <BiSearchAlt className="position-absolute icon-search"  /> */}
               <input type="text" className="search-property p-3 px-5 position-relative" placeholder="search property" onChange={searchPropertyHandler}/> 
                </div>
               </div>
              </div>
            </div>

            <div className="row mt-5">
            
              {

               

                  shownOurListing.map((data) => {
                    return (
                      
                      <div
                        key={data[0]}
                        style={{ padding: "45px" }}
                        className="col-lg-4 mt-5"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                      >
                        {/* <Link to={`/Single-Service/${data[1].title}`}> */}
                        <Atropos shadow={false}>
                          <Link to={'/'}>
                          <div>
                            <img className="img-fluid" src={data[1].img} />
                          </div>
                          <div className="details  p-3 text-center bg-white px-5 pb-5">
                            <p className="text-gray mb-2">{data[1].title}</p>
                            <h2 className="price">{ data[1].price === 0 ? 'free' : ('$' + data[1].price.toLocaleString())}</h2>
                            <div className="d-flex justify-content-center gap-1">
                              <p className="text-gray"> Sq Ft {data[1].sqft}</p>
                              <p className="text-gray">
                                {" "}
                                {data.beds ? `• Beds ${data[1].beds}` : ""}
                              </p>
                              <p className="text-gray">
                                {data.baths ? `• Baths ${data[1].baths}` : ""}
                              </p>
                            </div>
                            <div className="address mt-4">
                              <p className="text-primary ">{data[1].avenue}</p>
                              <p className="text-primary ">{data[1].city}</p>
                            </div>
                          </div>
                          </Link>
                        </Atropos>
                        {/* </Link> */}
                      </div>
                    
                    );
                  })
              
                
              
              
              
              }
            </div>
            <Pagination
              items={orderedList}
              itemscount={3}
              setShownItems={setShownOurListing}
            />
          </div>
        </div>
      </div>
      
      <ReadyToBuy title='Ready to buy ?'  />
      <Footer />
    </>
  );
}
