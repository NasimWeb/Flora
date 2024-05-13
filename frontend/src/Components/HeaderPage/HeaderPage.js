import { React, useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./HeaderPage.css";
import Navbar from "../Navbar/Navbar";
import { NavLink, Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HeaderPage({
  pageTitle,
  imgPath,
  serchSection,
  children,
  desc
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const showOffcanvance = () => {
    setShow(true);
  };

  const [showDropDown, setShowDropDown] =useState(false)

  return (

    <>


       {/* Mobile Header */}

       <div className="contanier">
      <div className="d-flex justify-content-around align-items-center d-lg-none header-page-mobile p-3">
        
        <div className="logo">
          <Link to="/">
            <Image fluid src="/./Images/Group 41.png"></Image>
          </Link>
        </div>

        <Button onClick={showOffcanvance}>
          <GiHamburgerMenu />
        </Button>

      </div>
        </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={true}
        name="Enable both scrolling & backdrop"
        style={{ zIndex: 9999999 }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img className="img-fluid" src="/./Images/Group 41.png" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="menu">
            <ul className="d-flex gap-3 menu-items flex-column">
              <NavLink to="/">
                <li className="text-dark">Home</li>
              </NavLink>
              <NavLink to="/aboutus">
                <li className="text-dark">About Us</li>
              </NavLink>
              <NavLink to="/Category-info/service">
                <li className="text-dark">
                <div className="d-flex gap-2 align-items-center" onClick={() => setShowDropDown(!showDropDown)}>
                Services {showDropDown ? <i className="fa-solid fa-chevron-down transition"></i> : <i class="fa-solid fa-chevron-up"></i>}
                </div>
                <div className={`dropdown ${showDropDown ? 'show' : 'hiden'}`}>
                  <ul className="d-flex flex-column gap-2 ">
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
              </NavLink>
              <NavLink to="/contactus">
                <li className="text-dark">Contact Us</li>
              </NavLink>
              <NavLink to="/login">
                <li className="text-dark">Login</li>
              </NavLink>
              <NavLink to="/register">
                <li className="text-dark">register</li>
              </NavLink>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>



      <div
        className="header-page position-relative  d-lg-flex flex-lg-column"
        style={{
          height: "300px",
          backgroundImage: `linear-gradient(180deg,rgba(150,105,97,0.67) 0%,rgba(2,0,76,0.80) 100%),url(${imgPath})`,
        }}
      >

        <Navbar />

        <div className=" text-white  ">
          <h1 className="text-white title-header text-center">{pageTitle}</h1>
          {
            desc ? (
              <p
              className="text-white mb-3"
              style={{
                width: "45rem",
                lineHeight: "1.8em",
                fontSize: "20px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              lacinia velit a feugiat finibus. Morbi iaculis diam id tellus
              iaculis, eu pretium metus fermentu
            </p>
            ) : (
              ''
            )
          }

          {serchSection ? (
            <div className="d-flex mb-3">
              <input
                type="text"
                className="search-city rounded position-relative"
                placeholder="Search by City"
                style={{ width: "367px" }}
              />
              <input
                type="submit"
                className="btn-search rounded position-absolute"
              />
            </div>
          ) : (
            ""
          )}

          {children}
        </div>
      </div>

    
    </>
  );
}
