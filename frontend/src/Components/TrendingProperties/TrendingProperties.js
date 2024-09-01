import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import "./TrendingProperties.css";
import { Link } from "react-router-dom";
import { Image, Shimmer } from "react-shimmer";
import Atropos from "atropos/react";

export default function TrendingProperties() {

  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="property-box d-flex flex-column  align-items-center gap-3 position-relative"
      >
        <div className="like-icon d-flex justify-content-center align-items-center">
          <AiOutlineHeart style={{ fontSize: "22px" }} />
        </div>

        <div className="d-flex flex-column justify-content-center gap-3">
          <Link to={`/`}>
            <Image
              className="img-fluid img-property"
              src="/./Images/Rectangle 50.png"
              title="img-property"
              alt="img-property"
              fallback={<Shimmer width={326} height={296} />}
            />
          </Link>

          <div className="d-flex justify-content-between">
            <p className="price-property">${250000}</p>
            <div className="share-icon d-flex justify-content-center align-items-center">
              <BsShare />
            </div>
          </div>

          <p className="title-property">Luxury Apartment in California</p>

          <div className="property-info d-flex gap-5">
            <div className="d-flex gap-2">
              <img src="/./Images/Group.png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (1).png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (2).png" />
              {1}
            </div>
          </div>

          <div className="location d-flex">
            <CiLocationOn style={{ fontSize: "25px" }} />
            <p>1901 Thornridge Cir.Shiloh, Hawaii 81063</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="property-box d-flex flex-column  align-items-center gap-3 position-relative"
      >
        <div className="like-icon d-flex justify-content-center align-items-center">
          <AiOutlineHeart style={{ fontSize: "22px" }} />
        </div>

        <div className="d-flex flex-column justify-content-center gap-3">
          <Link to={`/`}>
            <Image
              className="img-fluid img-property"
              src="/./Images/Rectangle 50 (1).png"
              title="img-property"
              alt="img-property"
              fallback={<Shimmer width={326} height={296} />}
            />
          </Link>

          <div className="d-flex justify-content-between">
            <p className="price-property">${175000}</p>
            <div className="share-icon d-flex justify-content-center align-items-center">
              <BsShare />
            </div>
          </div>

          <p className="title-property">Luxury Apartment in California</p>

          <div className="property-info d-flex gap-5">
            <div className="d-flex gap-2">
              <img src="/./Images/Group.png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (1).png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (2).png" />
              {1}
            </div>
          </div>

          <div className="location d-flex">
            <CiLocationOn style={{ fontSize: "25px" }} />
            <p>1901 Thornridge Cir.Shiloh, Hawaii 81063</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="property-box d-flex flex-column  align-items-center gap-3 position-relative"
      >
        <div className="like-icon d-flex justify-content-center align-items-center">
          <AiOutlineHeart style={{ fontSize: "22px" }} />
        </div>

        <div className="d-flex flex-column justify-content-center gap-3">
          <Link to={`/`}>
            <Image
              className="img-fluid img-property"
              src="/./Images/Rectangle 50 (2).png"
              title="img-property"
              alt="img-property"
              fallback={<Shimmer width={326} height={296} />}
            />
          </Link>

          <div className="d-flex justify-content-between">
            <p className="price-property">${300000}</p>
            <div className="share-icon d-flex justify-content-center align-items-center">
              <BsShare />
            </div>
          </div>

          <p className="title-property">Luxury Apartment in California</p>

          <div className="property-info d-flex gap-5">
            <div className="d-flex gap-2">
              <img src="/./Images/Group.png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (1).png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (2).png" />
              {1}
            </div>
          </div>

          <div className="location d-flex">
            <CiLocationOn style={{ fontSize: "25px" }} />
            <p>1901 Thornridge Cir.Shiloh, Hawaii 81063</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="property-box d-flex flex-column  align-items-center gap-3 position-relative"
      >
        <div className="like-icon d-flex justify-content-center align-items-center">
          <AiOutlineHeart style={{ fontSize: "22px" }} />
        </div>

        <div className="d-flex flex-column justify-content-center gap-3">
          <Link to={`/`}>
            <Image
              className="img-fluid img-property"
              src="/./Images/Rectangle 50 (3).png"
              title="img-property"
              alt="img-property"
              fallback={<Shimmer width={326} height={296} />}
            />
          </Link>

          <div className="d-flex justify-content-between">
            <p className="price-property">${140000}</p>
            <div className="share-icon d-flex justify-content-center align-items-center">
              <BsShare />
            </div>
          </div>

          <p className="title-property">Luxury Apartment in California</p>

          <div className="property-info d-flex gap-5">
            <div className="d-flex gap-2">
              <img src="/./Images/Group.png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (1).png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (2).png" />
              {1}
            </div>
          </div>

          <div className="location d-flex">
            <CiLocationOn style={{ fontSize: "25px" }} />
            <p>1901 Thornridge Cir.Shiloh, Hawaii 81063</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="property-box d-flex flex-column  align-items-center gap-3 position-relative"
      >
        <div className="like-icon d-flex justify-content-center align-items-center">
          <AiOutlineHeart style={{ fontSize: "22px" }} />
        </div>

        <div className="d-flex flex-column justify-content-center gap-3">
          <Link to={`/`}>
            <Image
              className="img-fluid img-property"
              src="/./Images/Rectangle 50 (4).png"
              title="img-property"
              alt="img-property"
              fallback={<Shimmer width={326} height={296} />}
            />
          </Link>

          <div className="d-flex justify-content-between">
            <p className="price-property">${500000}</p>
            <div className="share-icon d-flex justify-content-center align-items-center">
              <BsShare />
            </div>
          </div>

          <p className="title-property">Luxury Apartment in California</p>

          <div className="property-info d-flex gap-5">
            <div className="d-flex gap-2">
              <img src="/./Images/Group.png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (1).png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (2).png" />
              {1}
            </div>
          </div>

          <div className="location d-flex">
            <CiLocationOn style={{ fontSize: "25px" }} />
            <p>1901 Thornridge Cir.Shiloh, Hawaii 81063</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="property-box d-flex flex-column  align-items-center gap-3 position-relative"
      >
        <div className="like-icon d-flex justify-content-center align-items-center">
          <AiOutlineHeart style={{ fontSize: "22px" }} />
        </div>

        <div className="d-flex flex-column justify-content-center gap-3">
          <Link to={`/`}>
            <Image
              className="img-fluid img-property"
              src="/./Images/Rectangle 50 (5).png"
              title="img-property"
              alt="img-property"
              fallback={<Shimmer width={326} height={296} />}
            />
          </Link>

          <div className="d-flex justify-content-between">
            <p className="price-property">${275000}</p>
            <div className="share-icon d-flex justify-content-center align-items-center">
              <BsShare />
            </div>
          </div>

          <p className="title-property">Luxury Apartment in California</p>

          <div className="property-info d-flex gap-5">
            <div className="d-flex gap-2">
              <img src="/./Images/Group.png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (1).png" />
              {2}
            </div>
            <div className="d-flex gap-2">
              <img src="/./Images/Group (2).png" />
              {1}
            </div>
          </div>

          <div className="location d-flex">
            <CiLocationOn style={{ fontSize: "25px" }} />
            <p>1901 Thornridge Cir.Shiloh, Hawaii 81063</p>
          </div>
        </div>
      </div>
    </>
  );
}
