import React from "react";
import "./BreadCrumb.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";


export default function BreadCrumb({prevRout , currentRout , active , prevRoutTo}) {


  return (
    <div className='d-flex justify-content-center'>
      
                <Breadcrumb>
                <Link to='/' className="breadcrumbLink text-white" style={{color : '#025595 ' , marginRight : '8px'}}>Home</Link>
               {prevRout ? '/' : ''}
                 {
                  prevRout && (
                    <Link to={prevRoutTo} className={`breadcrumbLink text-white ${active === true ? 'active' : ''}` } style={{color : '#025595 ' , marginInline : '8px'}}>
                 {prevRout}
                  </Link>
                  )
                 }
                 {currentRout ? '/' : ''}
                { 
                    currentRout ? ( 
                     <Link  className="breadcrumbLink active"  style={{marginLeft : '8px'}}>{currentRout}</Link>
                    ) : (
                        null 

                    )
                }
              </Breadcrumb>
          
    </div>
  );
}
