import React from "react";
import { Link } from "react-router-dom";
import "./ReadyToBuy.css";


export default function ReadyToBuy({title}) {
  return (
    <div className="ready-to-buy" style={{ height: "400px" }}>
      <div className="container">
        <div className="row">

        <div className="d-flex flex-column justify-content-center align-items-center detail-section" style={{paddingBottom : '10%' , paddingTop : '5%'}}>
          <div className="text-center py-5" style={{maxWidth : '100%'}}>
            <h1 className="text-white ready-title" style={{maxWidth : '100%'}} >{title}</h1>
            <p
              className="text-white"
              style={{
                width: "45rem",
                fontWeight: "300",
                lineHeight: "1.8em",
                fontSize: "20px",
                maxWidth : '100%'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              lacinia velit a feugiat finibus. Morbi iaculis diam id tellus
              iaculis, eu pretium metus fermentu
            </p>
          </div>
        <div className="leader">
           <button className="btn btn-leader "><Link to='#' style={{ transition :'all 2.5ms ease'}} className="text-white " >Find a Lender </Link></button>
        </div>
        </div>

        </div>
      </div>
    </div>
  );
}
