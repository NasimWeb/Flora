import React from "react";
import "./SevicesSection.css";
import { Link } from "react-router-dom";
import {HiOutlineHome} from 'react-icons/hi'
import {BsBarChartLine} from 'react-icons/bs'
import {BsLayers} from 'react-icons/bs'

export default function Sevicessection() {
  return (
       <div className="container">
          <div className="col-lg-11 mx-auto servise-section-header" style={{marginTop : '-126px' , zIndex : '99' , position : 'relative'}} >
          <div className="row services-section justify-content-center ">
          <div className="col-lg-4 text-center">
            <div className="d-flex flex-column p-5 gap-3">
              <div className="services-icon mx-auto p-4" style={{background : '#BDC1C9' , maxWidth : 'fit-content' , borderRadius : '100%' , color : '#fff'}}><HiOutlineHome style={{fontSize : '50px'}} /></div>
              <h4 className="mt-2">Homes for Sale</h4>
              <p style={{color :'#898f99'}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium Sed ut perspiciatis unde omnis iste natus error sit
                volu
              </p>
              <button  className="btn btn-listing mt-4 mx-auto listing-link py-2 px-3" style={{maxWidth : 'fit-content'}}>
                <Link style={{color :'#3c39e6'}}  to="#">View Listings</Link>
              </button>
            </div>
            
          </div>
          <div className="col-lg-4 text-center">
            <div className="d-flex flex-column p-5 gap-3">
              <div className="services-icon mx-auto p-4" style={{background : '#BDC1C9' , maxWidth : 'fit-content' , borderRadius : '100%' , color : '#fff'}} ><BsBarChartLine style={{fontSize : '50px' , stroke : '#fff'}} /></div>
              <h4 className="mt-2">Commercial Properties</h4>
              <p style={{color :'#898f99'}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium Sed ut perspiciatis unde omnis iste natus error sit
                volu
              </p>
              <button  className="btn btn-listing mt-4 mx-auto listing-link py-2 px-3" style={{maxWidth : 'fit-content'}}>
                <Link style={{color :'#3c39e6'}}  to="#" >View Listings</Link>
              </button>
            </div>

          </div>
          <div className="col-lg-4 text-center">
            <div className="d-flex flex-column p-5 gap-3">
              <div className="services-icon mx-auto p-4" style={{background : '#BDC1C9' , maxWidth : 'fit-content' , borderRadius : '100%' , color : '#fff'}}><BsLayers stroke="#fff" style={{fontSize : '50px' }}/></div>
              <h4 className="mt-2">List Your Property</h4>
              <p style={{color :'#898f99'}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium Sed ut perspiciatis unde omnis iste natus error sit
                volu
              </p>
              <button  className="btn btn-listing mt-4 mx-auto listing-link py-2 px-3" style={{maxWidth : 'fit-content'}}>
                <Link style={{color :'#3c39e6'}} to="#">More INFO</Link>
              </button>
            </div>
          </div>
        </div>
          </div>
      </div>
  );
}
