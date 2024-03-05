import React, { useContext, useState , useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Inputs from "../Inputs/Inputs";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../vaidationRules/Rules";
import UseForm from "../../Hooks/UseForm";
import authContext from "../../Contexts/authContext";
import "./Login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import HeaderPage from "../../Components/HeaderPage/HeaderPage";

export default function Login() {

  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])




  const navigate = useNavigate();

  const [formState, OnInputHandler] = UseForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const AuthContext = useContext(authContext);

  const [rememberMe, setRememberMe] = useState(null);

  

  const LoginUser = (event) => {
    event.preventDefault();

    const userData = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value,
    };

    fetch("https://node-flora.liara.run/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((result) => {
        Swal.fire({
          title: "You are looged in secussfully",
          icon: "success",
          confirmButtonText: "Go to Panel",
        }).then((value) => {
          navigate("/");
        });
        AuthContext.logIn({}, result.accessToken);

        if (rememberMe) {
          const now = new Date();

          now.setTime(now.getTime() + 5 * 24 * 60 * 60 * 1000);

          document.cookie = `token=${result.accessToken};path=/;expires=${now}`;
        }

        const localStorageData = JSON.parse(localStorage.getItem("user"));

        if (localStorageData) {
          fetch("http://localhost:4000/v1/auth/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }).then((res) => {
            if (res.ok) {
              res.json().then((result) => {
                console.log(result);
                AuthContext.setUserInfos(result);
              });
            } else {
              console.error("Error while getting the user infos");
            }
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "username or password is not correct ",
          icon: "error",
          confirmButtonText: "try again",
        });
      });
  };

  
  const onChangeHndler = () => {
    setIsGoogleRecaptchaVerified(true);
  };

  const [isGoogleRecaptchaVerified, setIsGoogleRecaptchaVerified] =
    useState(false);

  return (
    <div>
      <HeaderPage pageTitle={"Login"} imgPath="/./Images/real-estate.jpg">
        <BreadCrumb currentRout={"Login"} />
      </HeaderPage>

      <div>
        <div className="container">
          <div class="wrapper">
            <form class="form-signin" onSubmit={LoginUser}>
              <h2 class="form-signin-heading text-center">Please login</h2>
              <div className="d-flex mb-3 justify-content-center gap-2 align-items-center">
                <p
                  className="text-center  align-items-center"
                  style={{ fontSize: "14px" }}
                >
                  you dont't have any account yet ?
                </p>
                <Link className="text-dark to-register" to="/register">
                  Click here
                </Link>
              </div>
              <Inputs
                type="text"
                className="form-control mb-2"
                name="username"
                placeholder="Email Address"
                element="input"
                id="username"
                allValidations={[
                  requiredValidator(),
                  minValidator(5),
                  maxValidator(40),
                ]}
                OnInputHandler={OnInputHandler}
              />
              <Inputs
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                id="password"
                element="input"
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
                  onChange={(e) => setRememberMe(e.target.value)}
                />{" "}
                Remember me
              </label>
              <button class="btn btn-lg btn-primary2 btn-block" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
