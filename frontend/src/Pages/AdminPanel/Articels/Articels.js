import React, { useEffect, useState } from "react";
import Inputs from "../../../Components/Inputs/Inputs";
import UseForm from "../../../Hooks/UseForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
} from "../../../Components/vaidationRules/Rules";
import TextEditor from "../../../Components/PanelAdmin/TextEditor/TextEditor";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DataGrid from "../../../Components/PanelAdmin/DataGrid/DataGrid";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom'
 



function Articles() {

  const [articleValue, setArticleValue] = useState("");
  const [Articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId , setCategoryId] = useState('-1')
  const [articleCover , setArticleCover] = useState('')

  const [formState, OnInputHandler] = UseForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },

      shortName: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllArticles();
    getAllCategories();
  }, []);

  function getAllArticles() {
    fetch("https://node-flora.liara.run/v1/articles")
      .then((res) => res.json())
      .then((allarticles) => setArticles(allarticles));
  }

  function getAllCategories() {
    fetch("https://json-server-flora.iran.liara.run/v1/category")
      .then((res) => res.json())
      .then((allCategories) => setCategories(allCategories));
  }


  const addNewArticle = (e) => {

    e.preventDefault()
    
    const formData = new FormData()

    formData.append('cover' , articleCover)
    formData.append('title' , formState.inputs.title.value)
    formData.append('description',formState.inputs.description.value)
    formData.append('body' , articleValue)
    formData.append('shortName',formState.inputs.shortName.value)
    formData.append('categoryID', categoryId)

    

    if (!articleCover) {
       Swal.fire({
        icon: 'error',
        text: "Please select an image",
       })
    }else if (categoryId === '-1') {
      Swal.fire({
        icon: 'error',
        text: "Select a category for the article",
      })
    }else {
        fetch('https://node-flora.liara.run/v1/articles' , {
          method :'POST',
          headers : {
            Authorization : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
          },
          body : formData
        }).then(res => {
          console.log(res);
          if(res.ok) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Article has been created',
              showConfirmButton: false,
              timer: 1500,
            })
            getAllArticles()
          }else{
            Swal.fire({
              icon: 'error',
              text: 'Something went wrong! Try again later',
            })
          }
        })
    }

  } 


  const deleteDiscountCode = (discountId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showConfirmButton : true,
      confirmButtonText : 'Yes, delete it',
      showCancelButton : true
    }).then(result => {
      if(result.isConfirmed) {
        fetch(`https://node-flora.liara.run/v1/articles/${discountId}` , {
          method : 'DELETE',
          headers : {
            Authorization : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
          }
        }).then(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Deleted Successfully',
          })
          getAllArticles()
        })
      }
    })
  }
 

  const addDraft = (e) => {

  e.preventDefault()
 
  const formData = new FormData()

    formData.append('cover' , articleCover)
    formData.append('title' , formState.inputs.title.value)
    formData.append('description',formState.inputs.description.value)
    formData.append('body' , articleValue)
    formData.append('shortName',formState.inputs.shortName.value)
    formData.append('categoryID', categoryId)

    

    if (!articleCover) {
       Swal.fire({
        icon: 'error',
        text: "Please select an image",
       })
    }else if (categoryId === '-1') {
      Swal.fire({
        icon: 'error',
        text: "Select a category for the article",
      })
    }else {
        fetch('https://node-flora.liara.run/v1/articles/draft' , {
          method :'POST',
          headers : {
            Authorization : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
          },
          body : formData
        }).then(res => {
          console.log(res);
          if(res.ok) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Article has been created',
              showConfirmButton: false,
              timer: 1500,
            })
            getAllArticles()
          }else{
            Swal.fire({
              icon: 'error',
              text: 'Something went wrong! Try again later',
            })
          }
        })
    }

  }



  return (
    <>
      <div className="container">
        <div className="rigister-user mb-4 p-5" style={{width: '100%'}}>
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
              <label>description</label>
              <Inputs
                id="description"
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
              <label>link</label>
              <Inputs
                id="shortName"
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

            <div className="d-flex gap-3 flex-column flex-lg-row align-items-center">
              <label>Category</label>
              <select onChange={(e) => setCategoryId(e.target.value)} >
                <option value='-1'>please select your category</option>
                {
                  categories.map(category => {
                    return (
                      <option value={category._id}>{category.title}</option>
                    )
                  })
                }
              </select>
            </div>

            <div className="d-flex mt-4 gap-3 flex-column flex-lg-row">
              <label>Image</label>
              <input className="input-form" type="file" onChange={(e) => setArticleCover(e.target.files[0])} />
            </div>
            <div className="d-flex mt-4 gap-3 flex-column flex-lg-row" style={{maxWidth : '100%'}}>
              <label>Content</label>
              <TextEditor value={articleValue} setValue={setArticleValue} />
            </div>
          </form>
          <div className="d-flex gap-3 flex-column flex-lg-row align-items-center mt-5">
            <button
              className={`btn ${
                formState.isFormValid ? "btn-success" : "btn-danger"
              }`}
              disabled={!formState.isFormValid}
              onClick={(e) => addNewArticle(e)}
            >
              Add new Aericle
            </button>
            <button
              className={`btn ${
                formState.isFormValid ? "btn-success" : "btn-danger"
              }`}
              disabled={!formState.isFormValid}
              onClick={(e) => addDraft(e)}
            >
              Add draft
            </button>
            <button className="btn btn-danger">cancle</button>
          </div>
        </div>
      </div>

      <DataGrid>
        <div className="container">
          <div className="row">
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
                <h4 className="pb-3">Articles</h4>{" "}
                
              </Grid>
              {Articles && (
                <>
                  {Articles.map((article) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        md={12}
                        style={{ padding: "10px" }}
                        className="d-flex border rounded  align-items-center flex-column flex-lg-row"
                        key={article._id}
                      >
                        <Grid
                          className="d-flex flex-column"
                          item
                          xs={12}
                          md={12}
                        >
                          <p className="main-color fw-500 ">Image</p>
                          <img
                            className="img-fluid"
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "40px",
                            }}
                            src={`http://localhost:4000/courses/covers/${article.cover}`}
                          />
                        </Grid>

                        <Grid
                          className="d-flex flex-column"
                          item
                          xs={12}
                          md={12}
                        >
                          <p className="main-color fw-500 ">Title</p>
                          <p className="fw-500 ">{article.title}</p>
                        </Grid>

                        <Grid
                          className="d-flex flex-column"
                          item
                          xs={12}
                          md={6}
                        >
                          <p className="main-color fw-500 ">status</p>
                          <p className="fw-500 ">{article.publish === 1 ? 'published' : 'draft'}</p>
                        </Grid>

                        <Grid
                          className="d-flex flex-column"
                          item
                          xs={12}
                          md={6}
                        >
                          <p className="main-color fw-500 ">link</p>
                          <p className="fw-500 ">{article.shortName}</p>
                        </Grid>

                       
                        <Grid className="d-flex gap-2 justify-content-center" item xs={12} md={12}>
                          {article.publish === 0 ? (
                             <Link to={`draft/${article.shortName}`}>
                             <Button 
                                className="hover-icon  "
                                style={{ borderRadius: "100%", minWidth: "30px" }}
                              >
                                <EditIcon style={{ color: "#000" }}  />
                                </Button>
                             </Link>
                          ) : (
                            <Link to={`editArticle/${article.shortName}`}>
                            <Button 
                                className="hover-icon  "
                                style={{ borderRadius: "100%", minWidth: "30px" }}
                                
                              >
                                <EditIcon style={{ color: "#000" }}  />
                                </Button>
                            
                            </Link>
                          )}
                        
                          <Button
                            className="hover-icon "
                            style={{ borderRadius: "100%", minWidth: "30px" }}
                            onClick={() => deleteDiscountCode(article._id)}
                          >
                            {" "}
                            <DeleteIcon
                              className="dlelet-icon"
                              style={{ color: "rgb(205, 24, 24)" }}
                            />
                          </Button>
                        </Grid>
                      </Grid>
                    );
                  })}
                </>
              )}
            </Grid>
          </div>
        </div>
      </DataGrid>

      

    </>
  );
}

export default Articles;
