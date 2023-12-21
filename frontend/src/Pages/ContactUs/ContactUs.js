import React, { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import HeaderPage from "../../Components/HeaderPage/HeaderPage";
import ReadyToBuy from "../../Components/ReadyToBuy/ReadyToBuy";
import Navbar from "../../Components/Navbar/Navbar";
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { RiInstagramLine } from "react-icons/ri";
import BreadCrump from "../../Components/BreadCrumb/BreadCrumb";
import Footer from "../../Components/Footer/Footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import infos from "../../Contexts/infosContext";
import ContactUsSchema from "../../Components/vaidationRules/Yup/ContactUsSchema";


export default function ContactUs() {
  const navigate = useNavigate();
  const infoContext = useContext(infos);

  const [whatLookingForSelect , setWhatLookingForSelect] = useState('-1')
  const [contactMethod , setContactMethod] = useState('-1')



  return (
    <>
      <Navbar />

      <HeaderPage
        pageTitle="Contact Us"
        imgPath="/./Images/mt-1446-content-bg-1.jpg"
      >
        <BreadCrump currentRout="Contact Us" />
      </HeaderPage>

      <div className="container" style={{ marginTop: "5rem" }}>
        <div className="contact-us-form my-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-lg-8 contact-form">
                  <div className="d-flex flex-column px-5 gap-4">
                    <h2>Let's Get Started</h2>

                    <Formik
                      initialValues={{
                        firstname: "",
                        lastname: "",
                        email: "",
                        phone: "",
                        message: "",
                      }}
                      validationSchema={ContactUsSchema}
                      onSubmit={(value) => {

                        const newMessage = {
                          name: value.firstname,
                          email: value.email,
                          phone: value.phone,
                          body: value.message,
                        };

                        if(contactMethod && whatLookingForSelect === '-1') {
                          Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `Please select your contact method and what are looking for ?`
                          })
                        }else{
                          fetch("https://node-flora.liara.run/v1/contact", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(newMessage),
                          }).then((res) => {
                            res.json();
                            if (res.ok) {
                              Swal.fire({
                                title: "Thankyou for your Feedback",
                                icon: "success",
                                confirmButtonText: "Go Home",
                              }).then((value) => {
                                navigate("/");
                              });
                            } else {
                              Swal.fire({
                                title: "something went wrong",
                                icon: "error",
                              });
                            }
                          });

                        }

                      }}
                    >
                      {({ values, errors, touched }) => {
                       
                        return (
                          <Form>
                            <div className="row">
                              <div className="col-lg-6 mb-3">
                                <Field
                                  name="firstname"
                                  placeholder="First Name"
                                  className={`input-form ${errors.firstname && touched.firstname ? 'border-red' : ''}`}
                                />
                                {errors.firstname && touched.firstname ? (
                                  <div className="text-danger">{errors.firstname}</div>
                                ) : null}
                              </div>
                              <div className="col-lg-6 mb-3">
                                {" "}
                                <Field
                                  name="lastname"
                                  type="text"
                                  placeholder="Last Name"
                                  className={`input-form ${errors.lastname && touched.lastname ? 'border-red' : ''}`}
                                />
                                {errors.lastname && touched.lastname ? (
                                  <div className="text-danger">{errors.lastname}</div>
                                ) : null}
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-lg-6 mb-3">
                                <Field
                                  name="email"
                                  type="email"
                                  placeholder="Email"
                                  className={`input-form ${errors.email && touched.email ? 'border-red' : ''}`}
                                />
                                {errors.email && touched.email ? (
                                  <div className="text-danger">{errors.email}</div>
                                ) : null}
                              </div>
                              <div className="col-lg-6 mb-3">
                                <Field
                                  name="phone"
                                  type="text"
                                  placeholder="Phone Number"
                                  className={`input-form ${errors.phone && touched.phone ? 'border-red' : ''}`}
                                />
                                {errors.phone && touched.phone ? (
                                  <div className="text-danger">{errors.phone}</div>
                                ) : null}
                              </div>
                            </div>
                            <div>
                              <div className="row mb-5">
                                <div className="col-lg-6 mb-3">
                                  <select
                                    className="input-form"
                                    style={{ color: "#999" }}
                                    value={contactMethod}
                                    onChange={e => setContactMethod(e.target.value)}
                                  >
                                    <option value={-1}>Preferred contact method</option>
                                    <option value="Phone">Phone</option>
                                    <option value="Email">Email</option>
                                    <option value="Text">Text</option>
                                  </select>
                                </div>
                                <div className="col-lg-6 mb-3">
                                  <select
                                    className="input-form"
                                    style={{ color: "#999" }}
                                    value={whatLookingForSelect}
                                    onChange={e => setWhatLookingForSelect(e.target.value)}
                                  >
                                    <option value={-1}>What are you looking for?</option>
                                    <option value="Phone">
                                      Looking to Buy
                                    </option>
                                    <option value="Email">
                                      Looking to Rent
                                    </option>
                                    <option value="Text">
                                      Looking to Sell
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12">
                                <Field
                                  name="message"
                                  placeholder="Message"
                                  className={`textarea-form input-form ${errors.message && touched.message ? 'border-red' : ''}`}
                                  style={{maxWidth : '100%'}}
                                />
                                {errors.message && touched.message ? (
                                  <div className="text-danger">{errors.message}</div>
                                ) : null}
                              </div>
                            </div>
                            <button
                              type="submit"
                              style={{ cursor: "pointer" }}
                              className="btn-form mt-2"
                            >
                              Send
                            </button>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
                <div className="col-lg-4 contact-details">
                  <div className="d-flex justify-content-center gap-4 flex-column text-white p-4">
                    <h2>Contact Info</h2>
                    <p>1234 Divi Street, San Fracisco, CA</p>
                    <p>{9347878378}</p>
                    <p>florainfo@gmail.com</p>
                    <ul className="d-flex gap-4">
                      <li>
                        <Link to="#">
                          <RiFacebookFill className="text-white" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <TiSocialLinkedin className="text-white" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <TiSocialTwitter className="text-white" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <RiInstagramLine className="text-white" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReadyToBuy title="BUYING, SELLING, OR RENTING?" />
      <Footer />
    </>
  );
}
