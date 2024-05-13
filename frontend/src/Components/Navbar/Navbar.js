import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="container d-none d-lg-flex">
    <div className="navbar">
  <div className="menus">
    <ul className="d-flex gap-3 align-items-center mb-0">
      <Link to="/">
        <li  className="menuitem">Home</li>
      </Link>
      <Link to="/aboutus">
        <li className="menuitem">About Us</li>
      </Link>
      <Link to="/Category-info/services">
        <li className="menuitem position-relative services-menu p-3">Services
        <div className="dropdowm">
                        <ul
                          className="position-absolute end-0 top-3 bg-white text-dark p-4 sub-menu rounded d-flex flex-column gap-2"
                          style={{ width: "17rem" }}
                        >
                          <li>
                            <Link
                              className="text-dark submenu-link"
                              to="/Service-info/ourListing"
                            >
                              our Listing
                            </Link>
                          </li>

                          <li>
                          <Link
                            className="text-dark submenu-link"
                            to="/Service-info/ourSoldsProperties"
                          >
                            Our Solds Properties
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-dark submenu-link"
                            to="/Service-info/offMarketProperties"
                          >
                            Off Market Properties
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-dark submenu-link"
                            to="/Service-info/searchForProperties"
                          >
                            Search For Properties
                          </Link>
                        </li>
                        </ul>
                      </div>
                    </li>
      </Link>
      <Link to="/contactus">
        <li className="menuitem">Contact Us</li>
      </Link>
    </ul>
  </div>
  <Link to="/" className="logo">
    <img src="/./Images/Group 41.png" />
  </Link>
  </div>

</div>
  )
}
