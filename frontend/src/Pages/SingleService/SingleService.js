import React, { useEffect, useLayoutEffect, useState } from "react";
import "./SingleService.css";
import { Link, NavLink, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import HeaderPage from "../../Components/HeaderPage/HeaderPage";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import DOMPurify from 'dompurify';

export default function SingleService() {
  
  const serviceName = useParams();
  const [allService, setAllServices] = useState([]);
  



  // {
  //   "id": 1,
  //   "title": "SingleFamilyHome",
  //   "img": "/./Images/real-estate-11.jpg",
  //   "price": 0,
  //   "sqft": 2503,
  //   "beds": 5,
  //   "baths": 3,
  //   "avenue": "564 Elegant Ave.",
  //   "city": "San Francisco, CA 39244"
  // },
  // {
  //   "id": 2,
  //   "title": "SingleApartment",
  //   "img": "/./Images/real-estate-12.jpg",
  //   "price": 654000,
  //   "sqft": 1654,
  //   "beds": 2,
  //   "baths": 3,
  //   "avenue": "564 Elegant Ave.",
  //   "city": "San Francisco, CA 39244"
  // },
  // {
  //   "id": 3,
  //   "title": "SingleFamilyApartment",
  //   "img": "/./Images/real-estate-13.jpg",
  //   "price": 1012895,
  //   "sqft": 2938,
  //   "beds": 5,
  //   "baths": 4,
  //   "avenue": "6578 Monarch St.",
  //   "city": "San Jose, CA 28344"
  // },
  // {
  //   "id": 4,
  //   "title": "OfficeSpace",
  //   "img": "/./Images/real-estate-14.jpg",
  //   "price": 954000,
  //   "sqft": 5452,
  //   "spaces": 3,
  //   "avenue": "123 Extra Ct.",
  //   "city": "San Francisco, CA 39222"
  // },
  // {
  //   "id": 5,
  //   "title": "Condo",
  //   "img": "/./Images/real-estate-15.jpg",
  //   "price": 302000,
  //   "sqft": 1854,
  //   "beds": 2,
  //   "baths": 1,
  //   "avenue": "8965 Bloom Blvd. #604",
  //   "city": "Berkeley, CA 91882"
  // },
  // {
  //   "id": 6,
  //   "title": "Apartment",
  //   "img": "/./Images/real-estate-16.jpg",
  //   "price": 1800,
  //   "sqft": 650,
  //   "beds": 1,
  //   "baths": 1,
  //   "avenue": "3542 Blue Sky Dr. #301",
  //   "city": "San Francisco, CA 39841"
  // },


  useEffect(() => {
    fetch(
      "http://localhost:5000/ourListing"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllServices(Object.entries(data));
      });
  }, []);



  const mainService = allService.filter(
    (service) => service[1].title === serviceName.serviceName
  );

  return (
    <>
      <HeaderPage
        pageTitle={mainService.map((service) => service[1].title)}
        imgPath="/./Images/ContactUs.jpg"
      >
        <BreadCrumb
          prevRout="Our Listing"
          prevRoutTo = '/Service-info/Ourlisting'
          currentRout={mainService.map((service) => service[1].title)}
        />
      </HeaderPage>

      <div className="container mt-5">
        <div className="row">
         
          <div className="col-lg-4 p-5">
            <sidebar className="sidebar-content">
              <ul className="d-flex flex-column gap-3 category-list ">
                {allService.map((service , index) => {
                  return (
                    <NavLink key={index} to={`/Single-Service/${service[1].title}`} className={({ isActive, isPending }) => {
                      if(isActive) {
                        return 'active';
                      }else { 
                        return '';
                      }

                      }}>
                      <li className="p-3 d-flex justify-content-between">
                        {service[1].title}
                        <MdOutlineKeyboardArrowRight
                          style={{ fontSize: "24px" }}
                        />
                      </li>
                    </NavLink>
                  );
                })} 
              </ul>
            </sidebar>
          </div>
          <div className="col-lg-8">
            <div className="single-service">
              {mainService.map((service) => {
                return (
                  <>
                    <div className="single-service-img">
                      <img
                        src={`${service[1].img}`}
                        style={{width:'770px' , height:'518px'}}
                        className="img-fluid"
                        title={serviceName.serviceName}
                        alt={serviceName.serviceName}
                      />
                    </div>

                    <div
                      className="service-content mt-4"
                      dangerouslySetInnerHTML={{
                        __html:  DOMPurify.sanitize(`${service[1].serviceValue}`),
                      }}
                    ></div>
                  </>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
