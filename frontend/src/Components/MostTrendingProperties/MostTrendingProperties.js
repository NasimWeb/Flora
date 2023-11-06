import React, { useEffect, useState } from "react";
import HeadersSections from "../HeadersSection/HeadersSections";
import TrendingProperties from "../TrendingProperties/TrendingProperties";
import './MostTrendingProperties.css'



export default function MostTrendingProperties() {

  return (
    <div className="Most-Trending-Properties ">
      <div className="container">
        <HeadersSections
          title="Our most trending properties"
          desc="It is a long established fact that a reader will be distracted by the readable 
             content of a page when looking at its layout. 
           The point of using."
        />
        <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
       <TrendingProperties />
        </div>
    
      </div>
    </div>
  );
}
