import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Inputs from "../Inputs/Inputs";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../vaidationRules/Rules";
import UseForm from "../../Hooks/UseForm";
import authContext from "../../Contexts/authContext";
import "./Register.css";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import HeaderPage from "../../Components/HeaderPage/HeaderPage";

export default function Register() {
  const onChangeHndler = () => {
    setIsGoogleRecaptchaVerified(true);
  };

  const [isGoogleRecaptchaVerified, setIsGoogleRecaptchaVerified] =
    useState(false);

  const navigate = useNavigate();

  const [formState, OnInputHandler] = UseForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      confirmPassword: {
        value: "",
        isValid: false,
      },
      phoneNumber: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const AuthContext = useContext(authContext);

  const RegisterNewUser = (event) => {
    event.preventDefault();

    const newUser = {
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.confirmPassword.value,
      name: formState.inputs.name.value,
      phone: formState.inputs.phoneNumber.value,
    };

    if (newUser.password === newUser.confirmPassword) {
      fetch("http://localhost:4000/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }).then((res) => {
        if (res.ok) {
          res.json().then((result) => {
            AuthContext.logIn(result.user, result.accessToken);
          });
          Swal.fire({
            title: "You are Rigistered Seccussfuly",
            icon: "success",
            confirmButtonText: "Go to Panel",
          });
        } else if (res.status === 403) {
          Swal.fire({
            title: "this number has baned",
            icon: "error",
            confirmButtonText: "ok",
          });
        } else if (res.status === 409) {
          Swal.fire({
            title: "you rigistered before please login",
            icon: "error",
            confirmButtonText: "ok",
          }).then((value) => {
            navigate("/login");
          });
        }
      });
    } else {
      Swal.fire({
        title: "password and confirmed password is not match",
        icon: "error",
        timer: 2000,
      });
    }
  };

  return (
    <>
        <HeaderPage pageTitle={'Register'} imgPath='/./Images/real-estate.jpg'>
      <BreadCrumb  currentRout={'Register'} />
      </HeaderPage>

      <div className="container">
        <div className="row justify-content-center">
          <div class="wrapper">
            <form class="form-signin" onSubmit={RegisterNewUser}>
              <h2 class="form-signin-heading text-center">Register Now</h2>
              <div className="d-flex mb-3 justify-content-center gap-2 align-items-center">
                <p
                  className="text-center  align-items-center"
                  style={{ fontSize: "14px" }}
                >
                  already have account ?
                </p>
                <Link className="text-dark to-register" to="/login">
                  Click here
                </Link>
              </div>
              <Inputs
                type="text"
                className="form-control mb-2"
                element="input"
                placeholder = 'name'
                id="name"
                allValidations={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(20),
                ]}
                OnInputHandler={OnInputHandler}
              />
              <Inputs
                type="text"
                className="form-control mb-2"
                element="input"
                placeholder = 'username'
                id="username"
                allValidations={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(20),
                ]}
                OnInputHandler={OnInputHandler}
              />
    
              <Inputs
                type="email"
                className="form-control mb-2"
                element="input"
                placeholder = 'email'
                id="email"
                allValidations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(30),
                  emailValidator(),
                ]}
                OnInputHandler={OnInputHandler}
              />
              <Inputs
                type="password"
                className="form-control mb-2"
                element="input"
                placeholder = 'password'
                id="password"
                allValidations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(15),
                ]}
                OnInputHandler={OnInputHandler}
              />

              <Inputs
                type="password"
                className="form-control mb-2"
                id="confirmPassword"
                placeholder = 'confirmPassword'
                element="input"
                allValidations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(15),
                ]}
                OnInputHandler={OnInputHandler}
              />

              <Inputs
                type="text"
                className="form-control mb-2"
                element="input"
                placeholder='phone'
                id="phoneNumber"
                allValidations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(15),
                ]}
                OnInputHandler={OnInputHandler}
              />
              <div className="mb-3 mt-3">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChangeHndler}
                />
              </div>
              <label class="checkbox">
                <input
                  type="checkbox"
                  value="remember-me"
                  id="rememberMe"
                  name="rememberMe"
                />{" "}
                Remember me
              </label>
              <button class="btn btn-lg btn-primary2 btn-block" type="submit">
                Register
              </button>
            </form>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
}
