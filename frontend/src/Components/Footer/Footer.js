import React, { useState } from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Swal from "sweetalert2";



export default function Footer() {




   


 

  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center align-items-baseline footer-row ">
          <div className="col-lg-3">
            <img src="/./Images/Group 41.png" className="mb-4" />
            <p className="footer-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              tempus felis vitae sit est quisque.
            </p>
          </div>
          <div className="col-lg-2">
            <ul className="d-flex gap-3 flex-column">
              <li className="footer-title">Service</li>
              <li>
                <a href="#">Payment & Tax</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">View Booking</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <ul className="d-flex gap-3 flex-column">
              <li className="footer-title">About</li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">New Property</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <p className="footer-title mb-4">Our Location</p>
            <p className="location">
              2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
            </p>
            <div className="d-flex gap-3">
              <div className="footer-icon mt-4">
                <FaFacebookF />
              </div>
              <div className="footer-icon mt-4">
                <FaTwitter />
              </div>
              <div className="footer-icon mt-4">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
          <div className="d-flex flex-column mt-4 flex-wrap">
              <p className="mb-3 newsletter-title">subscribe to newsletter</p>
              <div className="d-flex align-items-baseline gap-3 flex-wrap">
                <input  className="input-form" placeholder="email" id='email' type='email'  />
                <button
                  className={`btn btn-primary rounded btn-big-md `}
                  style={{ cursor: "pointer", width:'50%' }}
                >
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ background: "rgba(22, 16, 13, 0.1)" }} />

        <div className="copyright d-flex justify-content-center gap-5 mb-4">
          <p> Copyright 2022 flora. All Rights Reserved</p>
          <div className="d-flex gap-3">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );

  }