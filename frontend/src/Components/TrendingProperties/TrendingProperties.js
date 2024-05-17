import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import {AiOutlineHeart} from 'react-icons/ai';
import {BsShare} from 'react-icons/bs'
import "./TrendingProperties.css";
import { Link } from "react-router-dom";
import { Image, Shimmer } from 'react-shimmer'
import Atropos from 'atropos/react';



export default function TrendingProperties() {
  const [allProperties, setAllProperties] = useState([]);
 

  useEffect( () => {
    fetch(
      "https://json-server-flora.iran.liara.run/properties"
    )
      .then((res) => res.json())
      .then((properties) => setAllProperties(properties));
  }, []);

 

  return (
    <>
      {allProperties.map((property,index) => {
        return (
            

          <div   data-aos="fade-right" data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="property-box d-flex flex-column  align-items-center gap-3 position-relative">

            <div className="like-icon d-flex justify-content-center align-items-center">
             <AiOutlineHeart style={{fontSize :'22px'}} />
            </div>

            <div className="d-flex flex-column justify-content-center gap-3">
              <Link to={`/`}>
              <Image
                className="img-fluid img-property"
                src={property.img}
                title="img-property"
                alt="img-property"
                fallback={<Shimmer  width={326} height={296}/>}
              />
              
              </Link>

              <div className="d-flex justify-content-between">
              <p className="price-property">${property.price.toLocaleString()}</p>
              <div className="share-icon d-flex justify-content-center align-items-center">
              <BsShare />
              </div>
              </div>

              <p className="title-property">{property.title}</p>

              <div className="property-info d-flex gap-5">
                <div className="d-flex gap-2">
                  <img src="/./Images/Group.png" />
                  {property.beds}
                </div>
                <div className="d-flex gap-2">
                  <img src="/./Images/Group (1).png" />
                  {property.baths}
                </div>
                <div className="d-flex gap-2">
                  <img src="/./Images/Group (2).png" />
                  {property.parking}
                </div>
              </div>

              <div className="location d-flex">
                <CiLocationOn style={{ fontSize: "25px" }} />
                <p>{property.location}</p>
              </div>

            </div>
          </div>

            
        );
      })}
    </>
  );
}
