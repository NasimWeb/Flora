import React, { useEffect, useState } from "react";
import "./Category.css";
import DataGrid from "../../../Components/PanelAdmin/DataGrid/DataGrid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Inputs from "../../../Components/Inputs/Inputs";
import {
  requiredValidator,
  minValidator,
  maxValidator,
} from "../../../Components/vaidationRules/Rules";
import UseForm from "../../../Hooks/UseForm";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";


export default function Category() {
 
  const [mainCategory, setMainCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImageUrl , setCategoryImageUrl] = useState(null)
  const [allCategories, setAllCategories] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isServiceEdite , setIsServiceEdit] = useState(false)
  const [fullscreen, setFullscreen] = useState(true);
  const [categoryId, setCategoryId] = useState(null)
  const [isCategoryEdite, setIsCategoryEdite] = useState(false)


 

  useEffect(() => {
    getCategories()
  }, []);

  function getCategories () {
    fetch(
      "https://json-server-flora.iran.liara.run/categories"
    )
      .then((res) => res.json())
      .then((categories) => {
        setAllCategories(Object.entries(categories));
      });
  }

 

  const [formState, OnInputHandler] = UseForm(
    {
      Name: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const addNewCategory = async (event) => {

    event.preventDefault()

   const newCategory = {
      title: inputName,
      img: categoryImageUrl,
    };

   await fetch(
      "https://json-server-flora.iran.liara.run/categories", 
      { method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
        body: JSON.stringify(newCategory),}
    ).then((res) => {
      if (res.ok) {
        res.json();
        Swal.fire({
          title: "Category added successfully",
          icon: "success",
          timer: 3000,
        });
        getCategories()
      } else {
        res.text().then((result) => {
          Swal.fire("Error", result, "error");
        });
      }
    });
  };


  const [inputName ,  setInputName] = useState(null)
  


  const deletCateory = (categoryId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you can't reasore it",
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "No",
      showConfirmButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://json-server-flora.iran.liara.run/categories/${categoryId}`,
          {
            method: "DELETE",
          }
        ).then((res) => {
          if (res.ok) {
            res.json();
            Swal.fire({
              title: "Deleted Successfully",
              icon: "success",
              timer: 4500,
            });
            getCategories()
          } else {
            res.text().then((result) => {
              Swal.fire("Error", "Something went wrong please try again later");
            });
          }
        });
      } else {
        Swal.fire("Cancelled", "Your Category is safe :)");
      }
    });
  };




  // Edit Category
  useEffect( () => {

    const newEditCategory = {
      title : inputName,
      img: categoryImageUrl,
    };

    if(isCategoryEdite) {

      fetch(
        `https://json-server-flora.iran.liara.run/categories/${categoryId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
           },
          body: JSON.stringify(newEditCategory),
        }
      ).then((res) => {
        if (res.ok) {
          res.json();
          Swal.fire({
            title: "Updated successfully!",
            icon: "success",
          });
          getCategories()
        } else {
          Swal.fire({
            title: "Failed to update",
            icon: "error",
          });
        }
      });

    }

  } , [categoryId,isCategoryEdite])



  const InputFile = useRef()


  const readFile = (file) => {

   let reader = new FileReader()
  
   reader.readAsDataURL(file)

   reader.onload = function() {
    setCategoryImageUrl(reader.result)
  };


  reader.onerror = function() {
    console.log(reader.error);
  };

  reader.onprogress = function() {
    console.log("Progress:", Math.round((reader.loaded / file.size)* 100)+"%");
  }

  }



  const mainCategoryedit =  allCategories.filter(category => category[1].id === categoryId).map(category => category[1])


  const mainTitleCategory = mainCategoryedit.map(category => {
    return category
  })



  console.log(mainTitleCategory[0]);

  return (
    <>
      <div className="container">
        <div className="rigister-user mb-4 p-5">
          <form className="d-flex gap-2 flex-wrap  align-items-center">
            <div className="d-flex gap-3">
              <label>Name</label>
              <Inputs
                id="Name"
                type="text"
                element="input"
                className="input-form "
                allValidations={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(20),
                ]}
                OnInputHandler={OnInputHandler}
              />
            </div>
            <div className="d-flex gap-3">
              <label>Image</label>
              <input
              ref={InputFile}
              accept="image/*"
                type="file"
                className="input-form "
                onChange={(event) => readFile(event.target.files[0]) }
              />
            </div>
          </form>
              <div className="d-flex gap-3 align-items-center mt-5">
                <button
                  className={`btn ${
                    formState.isFormValid ? "btn-success" : "btn-danger"
                  }`}
                  disabled={!formState.isFormValid}
                  onClick={(e) => addNewCategory(e)}
                >
                  Add Category
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
          <Grid
            item
            xs={12}
            md={12}
            className="d-flex gap-3 align-items-center"
          >
            <h4 className="pb-3">Services Category</h4>{" "}
            
          </Grid>

          
          {allCategories.map((category, index) => {
            return (
              <Grid
                key={index}
                item
                xs={12}
                md={12}
                style={{ padding: "10px" }}
                className="d-flex border rounded p-3 flex-column flex-lg-row"
              >
                <Grid item className="d-flex flex-column" xs={12} md={12}>
                  <p className="main-color fw-500 ">Categoty</p>
                  <p className="fw-500 ">{category[1].title}</p>
                </Grid>
                <Grid item className="d-flex gap-2" xs={12} md={12}>
                  <Button
                    className="hover-icon  "
                    style={{ borderRadius: "100%", minWidth: "30px" }}
                  >
                    <EditIcon
                      style={{ color: "#000" }}
                      onClick={() => {
                        setShowEditModal(true)
                        setCategoryId(category[1].id)
                      }}
                    />
                  </Button>


                  <Button
                    className="hover-icon "
                    style={{ borderRadius: "100%", minWidth: "30px" }}
                  >
                    {" "}
                    <DeleteIcon
                      className="dlelet-icon"
                      style={{ color: "rgb(205, 24, 24)" }}
                      onClick={() => deletCateory(category[1].id)}
                    />
                  </Button>
                </Grid>
              </Grid>
            );
          })}

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
                        Edit Category
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form className="d-flex flex-column gap-3 justify-content-center">
                         <div className="d-flex gap-3">
                         <div className="d-flex align-items-center gap-3">
                          <label>Name :</label>
                          <input
                            // value={mainCategoryedit ?  mainCategoryedit[0].title : ''}
                            onChange={(e) => setInputName(e.target.value)}
                            placeholder="Name"
                            className="input-form "
                          
                          />
                        </div>
                         <div className="d-flex align-items-center gap-3">
                          <label>Image :</label>
                          <input
                            type='file'
                            className="input-form "
                            onChange={(e) => readFile(e.target.files[0])}
                          />
                        </div>
                       </div>
                      </form>
                      {/* <div className="d-flex justify-content-center align-items-center" style={{width:'300px' , height : '300px'}}><img src={mainCategoryedit[0].img} className="img-fluid" /></div> */}

                      <div className="d-flex mt-3 gap-3 justify-content-center">
                        <button
                          className="btn btn-success"
                          
                          onClick={() => {
                            setIsCategoryEdite(true)
                            setShowEditModal(false)
                          }}
                        >
                          Edit Category
                        </button>
                        <button className="btn btn-danger" onClick={() => setShowEditModal(false)}>Cancel</button>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/* end modal */}

        </Grid>
      </DataGrid>



      
    </>
  );
}
