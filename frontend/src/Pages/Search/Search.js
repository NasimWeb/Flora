import React, { useState, useEffect } from "react";
import "./Search.css";
import { useParams } from "react-router-dom";
import HeaderPage from "../../Components/HeaderPage/HeaderPage";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

export default function Search() {

  const [Properties, setProperties] = useState([]);
  const [ourListing, setOurListing] = useState([]);

  const { searchValue } = useParams();

  console.log(searchValue);

  useEffect(() => {
    fetch(
      "http://localhost:5000/ourListing"
    )
      .then((res) => res.json())
      .then((data) => {
        setOurListing(data);
        setProperties(data);
      });
  }, []);




  const serachFiltered = Object.values(Properties).filter((property) =>
    property.title.includes(searchValue.charAt(0).toUpperCase())
  );




  return (
    <>
      <Navbar />

      {serachFiltered.length !== 0  ? (
        <>
        <div className="bg-listing">
          <div className="container" style={{marginTop : '10rem'}}>
            <div className="row mt-5">
              {serachFiltered.map((data) => {
                return (
                  <div
                    key={data.id}
                    style={{ padding: "45px" }}
                    className="col-lg-4 mt-5 "
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <Link to="#">
                      <div>
                        <img className="img-fluid" src={data.img} />
                      </div>
                      <div className="details  p-3 text-center bg-white px-5 pb-5">
                        <p className="text-gray mb-2">{data.title}</p>
                        <h2 className="price">
                          ${data.price.toLocaleString()}
                        </h2>
                        <div className="d-flex justify-content-center gap-1">
                          <p className="text-gray"> Sq Ft {data.sqft}</p>
                          <p className="text-gray">
                            {" "}
                            {data.beds ? `• Beds ${data.beds}` : ""}
                          </p>
                          <p className="text-gray">
                            {data.baths ? `• Baths ${data.baths}` : ""}
                          </p>
                        </div>
                        <div className="address mt-4">
                          <p className="text-primary ">{data.avenue}</p>
                          <p className="text-primary ">{data.city}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
        </>
      )  : (
        <div className="container mt-5">
          <div className="alert alert-warning" style={{marginTop : '147px'}}>No Result</div>
        </div>
      )}

      <Footer />
    </>
  );
}
