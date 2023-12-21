import React, { useState, useEffect } from "react";
import "./ServiceBox.css";
import { Link } from "react-router-dom";
import Atropos from "atropos/react";

export default function ServiceBox() {
  const [allCategoryServices, setAllCategoryServices] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  function getCategories() {
    fetch("https://json-server-flora.iran.liara.run/categories")
      .then((res) => res.json())
      .then((categories) => {
        setAllCategoryServices(Object.entries(categories));
      });
  }

  return (
    <>
      <div className="services mt-5 overflow-hidden">
        <div className="row  ">
          {allCategoryServices.map((Category, index) => {
            return (
              <div
                key={index}
                className="col-sm-6 col-md-6 col-lg-4  p-3"
                data-aos="zoom-out-left"
              >
                <Atropos shadow={false}>
                  <div className="border rounded  serviceBox ">
                    <Link to="/Service-info/Ourlisting">
                      <img
                        style={{ width: "100%", height: "12rem" }}
                        className="img-fluid mb-3 rounded"
                        src={Category[1].img}
                      />
                      <span className="text-dark">{Category[1].title}</span>
                    </Link>
                  </div>
                </Atropos>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
