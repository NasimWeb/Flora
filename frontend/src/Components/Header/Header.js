import React, { useContext, useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { GoLocation } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Offcanvas from "react-bootstrap/Offcanvas";
import authContext from "../../Contexts/authContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import infos from "../../Contexts/infosContext";


export default function Header() {

  
  const [searchValue , setSearchValue] = useState('')
 

  
  // const RandomItems = (arr,randomcount) => {
  //   const shuffle = [...arr].sort((a,b) => 0.5 - Math.random())

  //    return shuffle.slice(0,randomcount)
  // }

  //  console.log(RandomItems(topbarLinks,5));

  const AuthContext = useContext(authContext);
  const infoContext = useContext(infos);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const showOffcanvance = () => {
    setShow(true);
  };

  const countupRef = useRef(null);
  let countUpAnim;

  let customerCount = useRef(null);
  let countUpAnimation;

  async function initCountUp() {
    const countUpModule = await import("countup.js");
    countUpAnim = new countUpModule.CountUp(countupRef.current, `${infoContext.totalTime}`, {
      enableScrollSpy: true,
    });
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }

    countUpAnimation = new countUpModule.CountUp(customerCount.current, `${infoContext.usersCount}`, {
      enableScrollSpy: true,
    });
    if (!countUpAnimation.error) {
      countUpAnimation.start();
    } else {
      console.error(countUpAnimation.error);
    }
  }

  const navigate = useNavigate()

  useEffect(() => {
    initCountUp()
  } ,[infoContext])



  return (
    <>
      {/* Desktop Header */}
      <header className="Header pt-4 overflow-hidden bg-header">
        <div
          className="container"
        >
          <nav className=" justify-content-around align-items-center d-none d-lg-flex">
            <div className="logo">
              <Link to="/">
                <Image fluid src="/./Images/Group 41.png"></Image>
              </Link>
            </div>
            <div className="menu">
              <ul className="d-flex gap-3">
                <NavLink to="/">
                  <li className="menu-link">Home</li>
                </NavLink>
                <NavLink to="/aboutus">
                  <li className="menu-link">About Us</li>
                </NavLink>
                <NavLink to="/Category-info/services">
                  <li className="menu-link position-relative services-menu">
                    Services
                    <div className="dropdowm">
                      <ul
                        className="position-absolute end-0 bg-white text-dark p-4 sub-menu rounded d-flex flex-column gap-2"
                        style={{ width: "17rem" }}
                      >
                        <li>
                          <Link
                            className="text-dark submenu-link"
                            to="/Service-info/ourListing"
                          >
                            Our listing
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
                  <li className="menu-link">Contact Us</li>
                </NavLink>
              </ul>
            </div>
            <Button className="btn-primary px-5 py-3 " variant="primary">
              {AuthContext.isLogedIn ? (
                <Link className="text-white" to="/login">
                  {" "}
                  {AuthContext.userInfos.name}
                </Link>
              ) : (
                <Link className="text-white" to="/login">
                  {}
                  Login / Register
                </Link>
              )}
            </Button>
          </nav>

          {/* Mobile Header */}

          <div className="d-flex justify-content-around align-items-center d-lg-none">
            <div className="logo">
              <Link to="/">
                <Image fluid src="/./Images/Group 41.png"></Image>
              </Link>
            </div>

            <Button onClick={showOffcanvance}>
              <GiHamburgerMenu />
            </Button>
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
                    <li className="text-dark">Services</li>
                  </NavLink>
                  <NavLink to="/contactus">
                    <li className="text-dark">Contact Us</li>
                  </NavLink>
                </ul>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          {/* Hero Section */}
          <div className="hero-section d-flex ">
            <div className="d-flex flex-column hero ">
              <p className="hero-Title mb-4 mt-5">
                <Typewriter
                  onInit={(Typewriter) => {
                    Typewriter.typeString(
                      " Discover a place you will love to live"
                    )
                      .start()
                      .pauseFor(2000)
                      .deleteAll();
                  }}
                  options={{
                    loop: true,
                  }}
                />
              </p>
              <span className="hero-desc mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet tempus felis vitae sit est quisque.
              </span>
              <div className="flora-info d-flex col-lg-12 align-items-center justify-content-around mt-4 flex-wrap">
                <div className="d-flex icon-section flex-wrap">
                  <div className="header-icon d-flex align-items-center gap-2">
                    <GoLocation
                      style={{ color: "#025595", fontSize: "30px" }}
                    />
                    <div>
                      <p>Location</p>
                      <p>Ahmedabad, India</p>
                    </div>
                  </div>

                  <div className="header-icon d-flex align-items-center gap-2">
                    <BiDollar style={{ color: "#025595", fontSize: "30px" }} />
                    <div>
                      <p>Price</p>
                      <p>$1000 - $10,000</p>
                    </div>
                  </div>

                  <div className="header-icon d-flex align-items-center gap-2">
                    <FaHome style={{ color: "#025595", fontSize: "30px" }} />
                    <div>
                      <p>Type of Property</p>
                      <p>Apartment</p>
                    </div>
                  </div>
                </div>
                <button
                  className="serchbox d-flex align-items-center justify-content-center text-white"
                  style={{cursor : 'pointer' , outline : 'none'}}
                 onChange={(e) => setSearchValue(e.target.value)}
                  onClick={() => {
                    Swal.fire({
                      title: "search your property",
                      icon: "question",
                      confirmButtonText: "New Property",
                      input: 'text',
                      inputLabel: 'Your Search Property',
                      showCancelButton: true,
                      inputValue: searchValue,
                      inputValidator : (searchValue) => {
                        if(!searchValue) {
                          return 'You need to write your property!'
                          }else {
                            navigate(`/search/${searchValue}`)
                          }
                      }
                    })
                  }}
               >
                  <FiSearch   style={{right : '36px' , color :'#fff' , fontSize :'25px' , cursor : 'pointer'}}/>
                </button>
              </div>

              <div>
                <div className="d-flex gap-5 mt-4">
                  <div className="d-flex flex-column">
                    <span
                      ref={countupRef}
                      className="text-dark-main"
                      style={{ fontSize: "30px" }}
                    >
                      2000+
                    </span>
                    <p className="text-dark-main">Property Ready</p>
                  </div>

                  <div className="d-flex flex-column">
                    <span
                      ref={customerCount}
                      className="text-dark-main"
                      style={{ fontSize: "30px" }}
                    >
                      500+
                    </span>
                    <p className="text-dark-main">Happy Custpmer</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              
            </div> */}
          </div>
          {/* Hero Section End */}
        </div>
      </header>
    </>
  );
}
