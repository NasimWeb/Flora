import React, { useContext, useState } from "react";
import "./ContactUs.css";
import { Link, useParams } from "react-router-dom";
import HeaderPage from "../../Components/HeaderPage/HeaderPage";
import ReadyToBuy from "../../Components/ReadyToBuy/ReadyToBuy";
import Navbar from "../../Components/Navbar/Navbar";
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { RiInstagramLine } from "react-icons/ri";
import BreadCrump from '../../Components/BreadCrumb/BreadCrumb'
import Footer from '../../Components/Footer/Footer'
import {IoIosArrowForward} from 'react-icons/io'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UseForm from '../../Hooks/UseForm'
import Inputs from "../../Components/Inputs/Inputs";
import  { requiredValidator , minValidator , maxValidator , emailValidator}  from "../../Components/vaidationRules/Rules"; 
import infos from "../../Contexts/infosContext";

export default function ContactUs() {

  const navigate = useNavigate();
  const infoContext = useContext(infos)

 
  
  const [formState, OnInputHandler] = UseForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      lastname: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },

    },
    false
  );



  const newMessage = {
    name : formState.inputs.username.value,
    email : formState.inputs.email.value ,
    phone : formState.inputs.phone.value,
    body : formState.inputs.message.value
  }

  const submitContactForm = (event) => {
 
    event.preventDefault()
  
   fetch('http://localhost:4000/v1/contact', {
    method : 'POST',
   headers : {
     'Content-Type' : 'application/json'
   },
    body : JSON.stringify(newMessage)
   }).then(res => {
    res.json()
    if(res.ok) {
      Swal.fire({
        title: "Thankyou for your Feedback",
        icon: "success",
        confirmButtonText: "Go Home",
      }).then((value) => {
        navigate("/");
      });
    }else{
      Swal.fire({
        title: "please fill all inputs",
        icon: "error",
      })
    }
  })
  
  }

  console.log('contact us');

  return (
    <>
      <Navbar />

      <HeaderPage pageTitle='Contact Us' imgPath='/./Images/mt-1446-content-bg-1.jpg'>
        <BreadCrump currentRout='Contact Us' />
      </HeaderPage>
      

      <div className="container" style={{marginTop : '5rem'}}>
        <div className="contact-us-form my-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-lg-8 contact-form">
                  <div className="d-flex flex-column px-5 gap-4">
                    <h2>Let's Get Started</h2>
                    <form onSubmit={ (event) =>  submitContactForm(event)}>
                      <div className="row mb-3">
                        <div className="col-lg-6">
                          <Inputs
                          id="username"
                            type="text"
                            element='input'
                            placeholder="First Name"
                            className="input-form"
                            allValidations = {[
                              requiredValidator(),
                              minValidator(5),
                              maxValidator(20)
                            ]}
                            OnInputHandler={OnInputHandler}
                          />
                        </div>
                        <div className="col-lg-6">
                          {" "}
                          <Inputs
                          id="lastname"
                          element='input'
                            type="text"
                            placeholder="Last Name"
                            className="input-form"
                            allValidations = {[
                              requiredValidator(),
                              minValidator(5),
                              maxValidator(20)
                            ]}
                            OnInputHandler={OnInputHandler}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-lg-6">
                          <Inputs
                          id="email"
                          element='input'
                            type="email"
                            placeholder="Email"
                            className="input-form"
                            allValidations = {[
                              requiredValidator(),
                              minValidator(5),
                              maxValidator(20),
                              emailValidator()
                            ]}
                            OnInputHandler={OnInputHandler}
                          />
                        </div>
                        <div className="col-lg-6">
                          <Inputs
                          element='input'
                          id="phone"
                            type="text"
                            placeholder="Phone Number"
                            className="input-form"
                            allValidations = {[
                              requiredValidator(),
                              minValidator(5),
                              maxValidator(20)
                            ]}
                            OnInputHandler={OnInputHandler}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="row mb-5">
                          <div className="col-lg-6">
                            <select
                              className="input-form"
                              style={{ color: "#999" }}
                            >
                              <option>Preferred contact method</option>
                              <option value="Phone">Phone</option>
                              <option value="Email">Email</option>
                              <option value="Text">Text</option>
                            </select>
                          </div>
                          <div className="col-lg-6">
                            <select
                              className="input-form"
                              style={{ color: "#999" }}
                            >
                              <option>What are you looking for?</option>
                              <option value="Phone">Looking to Buy</option>
                              <option value="Email">Looking to Rent</option>
                              <option value="Text">Looking to Sell</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <Inputs
                          id='message'
                            placeholder="Message"
                            className="textarea-form input-form"
                            allValidations = {[
                              requiredValidator(),
                              minValidator(5),
                              maxValidator(100)
                            ]}
                            OnInputHandler={OnInputHandler}
                          />
                        </div>
                      </div>
                      <button type="submit" style={{cursor : 'pointer'}} className="btn-form mt-2" disabled={!formState.isFormValid}>Send</button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 contact-details">
                  <div className="d-flex justify-content-center gap-4 flex-column text-white p-4">
                    <h2>Contact Info</h2>
                    <p>1234 Divi Street, San Fracisco, CA</p>
                    <p>{infoContext.phone}</p>
                    <p>{infoContext.email}</p>
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
