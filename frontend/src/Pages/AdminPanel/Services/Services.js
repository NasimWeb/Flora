import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DataGrid from "../../../Components/PanelAdmin/DataGrid/DataGrid";
import Inputs from "../../../Components/Inputs/Inputs";
import UseForm from "../../../Hooks/UseForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
} from "../../../Components/vaidationRules/Rules";
import TextEditor from "../../../Components/PanelAdmin/TextEditor/TextEditor";
import "./Services.css";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";

export default function Services() {


  const [allServices, setAllServices] = useState([]);
  const [serviceValue, setServiceValue] = useState("");
  const [Name, setName] = useState("");
  const [City, setCity] = useState("");
  const [Price, setPrice] = useState("");
  const [sqft, setSqft] = useState("");
  const [Avenue, setAvenue] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [serviceId, setServiceId] = useState(null);
  const [isServiceEdite , setIsServiceEdit] = useState(false)
  const [isSetImagePreviewUrl ,setIsImagePreviewUrl] = useState(null)
  const [imageUrlService, setImageUrlService] = useState(null)



  useEffect(() => {
   getServices()
  }, []);

   function getServices () {
    fetch(
      "http://localhost:5000/ourListing"
    )
      .then((res) => res.json())
      .then((result) => setAllServices(Object.entries(result)));
   }


  // Edit Service

  useEffect(() => {

    const newEditService = {
      title: formState.inputs.title.value,
      city: formState.inputs.city.value,
      price: formState.inputs.price.value,
      sqft: formState.inputs.sqft.value,
      avenue: formState.inputs.avenue.value,
      img: imageUrlService,
      serviceValue : serviceValue
    };


    
    if (isServiceEdite) {

      fetch(
        `http://localhost:5000/ourListing/${serviceId}`,
        {
          method: "PUT",
          headers:{
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(newEditService),
        }
      ).then((res) => {
        if (res.ok) {
          Swal.fire(
            "Success",
            "Your service has been updated successfully!",
            "success"
          );
          setShowEditModal(false)
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      });
    }

  }, [serviceId , isServiceEdite]);

   


  const [formState, OnInputHandler] = UseForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      city: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      sqft: {
        value: "",
        isValid: false,
      },
      avenue: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const AddNewService = (event) => {


    event.preventDefault();

    const newService = {
      title: formState.inputs.title.value,
      city: formState.inputs.city.value,
      price: Number(formState.inputs.price.value),
      sqft: Number(formState.inputs.sqft.value),
      avenue: formState.inputs.avenue.value,
      img: imageUrlService,
      serviceValue : serviceValue
    };


    fetch(
      "http://localhost:5000/ourListing",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newService),
      }
    )
      .then((res) => {
        if (res.ok) {
          res.json();
          Swal.fire({
            position: "top-end",
            icon: "success",
            toast: true,
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 2500,
            text: "Your service has been added successfully",
          });
          getServices()
        } else {
          res.text().then((err) => {
            throw new Error(err);
          });
          Swal.fire(
            "Error",
            "Something went wrong! Please try again later.",
            "error"
          );
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          toast: true,
        });
      });
  };

  const deletService = (serviceId) => {
    Swal.fire({
      title: `Are you sure?`,
      html: `<p>You won't be able to revert this!</p>`,
      confirmButtonText: `Yes, delete it!`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/ourListing/${serviceId}`,
          {
            method: "DELETE",
          }
        ).then((res) => {
          if (res.ok) {
            Swal.fire(`Deleted Successfully`);
            getServices()
          } else {
            Swal.fire("Oops", "something went wrong please try again", "error");
          }
        });
      }
    });
  };



  const readFile = (file) => {

    const reader = new FileReader();
    reader.readAsDataURL(file)

    reader.onload = async() => {
    await  setIsImagePreviewUrl(reader.result);
     await setImageUrlService(reader.result)
    }
   

    reader.onerror= () => {
      console.log(reader.error);
    }

    reader.onprogress = function() {
      console.log("Progress:", Math.round((reader.loaded / file.size)* 100)+"%");
    }

  }

  return (
    <>
      <div className="container">
        <div className="rigister-user mb-4 p-5">
          <form className="d-flex gap-2 flex-wrap ">
            <div className="d-flex gap-3 flex-column flex-lg-row">
              <label>title</label>
              <Inputs
                id="title"
                type="text"
                element="input"
                className="input-form "
                allValidations={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(30),
                ]}
                OnInputHandler={OnInputHandler}
              />
            </div>
            <div className="d-flex gap-3 flex-column flex-lg-row">
              <label>city</label>
              <Inputs
                id="city"
                type="text"
                element="input"
                className="input-form "
                allValidations={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(30),
                ]}
                OnInputHandler={OnInputHandler}
              />
            </div>
            <div className="d-flex gap-3 flex-column flex-lg-row">
              <label>price</label>
              <Inputs
                id="price"
                type="email"
                element="input"
                className="input-form "
                allValidations={[
                  requiredValidator(),
                  minValidator(0),
                  maxValidator(30),
                ]}
                OnInputHandler={OnInputHandler}
              />
            </div>
            <div className="d-flex gap-3 flex-column flex-lg-row">
              <label>sqft</label>
              <Inputs
                id="sqft"
                type="text"
                element="input"
                className="input-form "
                allValidations={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(25),
                ]}
                OnInputHandler={OnInputHandler}
              />
            </div>
            <div className="d-flex gap-3 flex-column flex-lg-row">
              <label>avenue</label>
              <Inputs
                id="avenue"
                type="text"
                element="input"
                className="input-form "
                allValidations={[
                  requiredValidator(),
                  minValidator(2),
                  maxValidator(25),
                ]}
                OnInputHandler={OnInputHandler}
              />
            </div>
            <div className="d-flex mt-4 gap-3 flex-column flex-lg-row">
              <label>Image</label>
               <input
               className="input-form"
               type="file"
               onChange={(e) => readFile(e.target.files[0])}
               />
            </div>
            <div className="d-flex mt-4 gap-3 flex-column flex-lg-row" style={{width : '100%'}}>
              <label>Content</label>
              <TextEditor  value={serviceValue} setValue={setServiceValue} />
            </div>
          </form>
          <div className="d-flex gap-3 align-items-center mt-5">
            <button
              className={`btn ${
                formState.isFormValid ? "btn-success" : "btn-danger"
              }`}
              disabled={!formState.isFormValid}
              onClick={(e) => AddNewService(e)}
            >
              Add new Service
            </button>
            <button className="btn btn-danger">cancle</button>
          </div>
        </div>
      </div>

      <DataGrid>
        <Grid
          container
          rowGap={2}
          columnGap={1}
          className="properties-list p-4"
        >
          <Grid item xs={12} md={12} className="d-flex gap-3 align-items-center">
            <h4 className="pb-3">Services</h4>{" "}
            
          </Grid>
          {allServices.map((service) => {
            return (
              <Grid
                item
                xs={12}
                md={12}
                style={{ padding: "10px" }}
                className="d-flex border rounded p-3 flex-column flex-lg-row"
                key={service[0]}
              >
                <Grid className="d-flex flex-column" item xs={6} md={12}>
                  <p className="main-color fw-500 ">Title</p>
                  <p className="fw-500 ">{service[1].title}</p>
                </Grid>
                <Grid className="d-flex flex-column" item xs={6} md={12}>
                  <p className="main-color fw-500 ">Sqft</p>
                  <p className="fw-500 ">{service[1].sqft}</p>
                </Grid>
                <Grid className="d-flex flex-column" item xs={6} md={12}>
                  <p className="main-color fw-500 ">Price</p>
                  <p className="fw-500 ">
                    {service[1].price === 0
                      ? "free"
                      : service[1].price.toLocaleString()}
                  </p>
                </Grid>
                <Grid className="d-flex gap-2" item xs={6} md={12}>
                  <Button
                    className="hover-icon  "
                    style={{ borderRadius: "100%", minWidth: "30px" }}
                  >
                    <EditIcon
                      style={{ color: "#000" }}
                      onClick={() => {
                        setShowEditModal(true);
                        setServiceId(service[1].id);
                      }}
                    />
                  </Button>

                  {/* start modal */}
                  <Modal
                    show={showEditModal}
                    fullscreen={fullscreen}
                    onHide={() => setShowEditModal(false)}
                  >
                    <Modal.Header
                      closeButton
                      style={{ background: "rgb(255, 33, 79)" }}
                    >
                      <Modal.Title className="text-white">
                        Edit Service
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form className="d-flex flex-column gap-3 justify-content-center">
                         <div className="d-flex gap-3 flex-wrap">
                         <div className="d-flex">
                          <label>Name :</label>
                          <Inputs
                            placeholder="Name"
                            id="title"
                            element="input"
                            className="input-form "
                            allValidations={[
                              requiredValidator(),
                              minValidator(2),
                              maxValidator(30),
                            ]}
                            OnInputHandler={OnInputHandler}
                          />
                        </div>

                        <div className="d-flex">
                          <label>City :</label>
                          <Inputs
                            placeholder="city"
                            id="city"
                            element="input"
                            className="input-form "
                            allValidations={[
                              requiredValidator(),
                              minValidator(2),
                              maxValidator(30),
                            ]}
                            OnInputHandler={OnInputHandler}
                          />
                        </div>

                        
                        <div className="d-flex">
                          <label>Price :</label>
                          <Inputs
                            placeholder="price"
                            id="price"
                            element="input"
                            className="input-form "
                            allValidations={[
                              requiredValidator(),
                              minValidator(0),
                              maxValidator(30),
                            ]}
                            OnInputHandler={OnInputHandler}
                          />
                        </div>

                        <div className="d-flex">
                          <label>sqft :</label>
                          <Inputs
                            placeholder="sqft"
                            id="sqft"
                            element="input"
                            className="input-form "
                            allValidations={[
                              requiredValidator(),
                              minValidator(2),
                              maxValidator(30),
                            ]}
                            OnInputHandler={OnInputHandler}
                          />
                        </div>

                        <div className="d-flex">
                          <label>avenue :</label>
                          <Inputs
                            placeholder="avenue"
                            id="avenue"
                            element="input"
                            className="input-form "
                            allValidations={[
                              requiredValidator(),
                              minValidator(2),
                              maxValidator(30),
                            ]}
                            OnInputHandler={OnInputHandler}
                          />
                        </div>

                        <div className="d-flex">
                          <label>Image :</label>
                          <input
                           type="file"
                           className="input-form "
                           onChange={(e) => readFile(e.target.files[0])}
                          />
                        </div>
                         </div>

                        <TextEditor value={serviceValue} setValue={setServiceValue} />

                      </form>
                      <div className="d-flex mt-3 gap-3 justify-content-center">
                        <button
                          className="btn btn-success"
                          disabled={!formState.isFormValid}
                          onClick={() => {
                            setIsServiceEdit(true)
                          }}
                        >
                          Edit Service
                        </button>
                        <button className="btn btn-danger" onClick={() => setShowEditModal(false)}>Cancel</button>
                      </div>
                    </Modal.Body>
                  </Modal>

                  {/* end modal */}

                  <Button
                    className="hover-icon "
                    style={{ borderRadius: "100%", minWidth: "30px" }}
                  >
                    {" "}
                    <DeleteIcon
                      className="dlelet-icon"
                      style={{ color: "rgb(205, 24, 24)" }}
                      onClick={() => {
                        deletService(service[1].id);
                      }}
                    />
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </DataGrid>
    </>
  );
}
