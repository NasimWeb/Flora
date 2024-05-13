import React, { useState, useEffect } from "react";
import "./ServiceBox.css";
import { Link } from "react-router-dom";
import Atropos from "atropos/react";
import categories from "../../Datas/Categories";


export default function ServiceBox() {
 

  return (
    <>
      <div className="services mt-5 overflow-hidden">
        <div className="row  ">
          {
            categories.map((category , index) => {
              return (
                <div
                key={index}
                className="col-sm-6 col-md-6 col-lg-4  p-3"
                data-aos="zoom-out-left"
              >
                <Atropos shadow={false}>
                  <div className="border rounded  serviceBox ">
                    <Link to={`/Service-info/${category.title}`}>
                      <img
                        style={{ width: "100%", height: "12rem" }}
                        className="img-fluid mb-3 rounded"
                        src={category.img}
                      />
                      <span className="text-dark">{category.title}</span>
                    </Link>
                  </div>
                </Atropos>
              </div>
              )
            })
          }
             
        </div>
      </div>
    </>
  );
}
