import React, { useEffect, useState } from "react";
import DataGrid from "../../../Components/PanelAdmin/DataGrid/DataGrid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import "./Comments.css";
import { MdDone } from "react-icons/md";
import { RiForbid2Line } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export default function Comments() {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllComments();
  }, []);

 async function getAllComments() {
   await fetch("https://node-flora.liara.run/v1/comments")
      .then((res) => {
        res.status == 200  ? res.json().then((allComments) => setComments(allComments)) : console.log(res.statusText);
      })
      
  }

  console.log(comments);

  const seeBodyComment = (commentBody) => {
    Swal.fire({
      title: "Comentario",
      text: commentBody,
      icon: "info",
    });
  };

  const deletComment = (commentId) => {
    Swal.fire({
      title: "Are you Sure?",
      text: "you Can't restore it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "sure, delet it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://node-flora.liara.run/v1/comments/${commentId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "Deleted! ",
              text: "Your comment has been deleted.",
              icon: "success",
            });
            getAllComments();
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong please try again later.",
              icon: "error",
            });
          }
        });
      }
    });
  };

  const banComment = (commentUserId) => {
    fetch(`https://node-flora.liara.run/v1/users/ban/${commentUserId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => {
        if (res.ok) {
          Swal.fire({
            title: "Successfully Banned!",
            text: `This user is banned now.`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong please try again later.",
            icon: "error",
          });
          throw new Error(res.statusText);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const answerComment = (commentId) => {
    Swal.fire({
      title: "answer to comment",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "answer",
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const commentAnswer = {
          body: result.value,
        };
        fetch(`https://node-flora.liara.run/v1/comments/answer/${commentId}`, {
          method: "POST",
          body: JSON.stringify(commentAnswer),
          headers: {
            Authorization: `Berear ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
            "Content-Type": `application/json`,
          },
        })
          .then((res) => {
            if (res.ok) {
              Swal.fire({
                title: "Success!",
                text: "Your Answer has been posted successfully",
                icon: "success",
              });
              getAllComments();
            } else {
              throw new Error(res.statusText);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const acceptComment = (commentId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://node-flora.liara.run/v1/comments/accept/${commentId}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        })
          .then((res) => {
            if (res.ok) {
              Swal.fire({
                title: "Success!",
                text: "The Comment has been accepted",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "There was an error accepting the comment",
                icon: "error",
              });
              throw new Error(res.statusText);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const rejectComment = (commentId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://node-flora.liara.run/v1/comments/reject/${commentId}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        })
          .then((res) => {
            if (res.ok) {
              Swal.fire({
                title: "Success!",
                text: "The Comment has been rejected",
                icon: "success",
              });
              getAllComments();
            } else {
              Swal.fire({
                title: "Error!",
                text: "There was an error rejecting the comment",
                icon: "error",
              });
              throw new Error(res.statusText);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <DataGrid>
      <Grid container rowGap={2} columnGap={1} className="properties-list p-3">
        <Grid item xs={12} md={12} className="d-flex gap-3 align-items-center">
          <h4 className="pb-3">Comments</h4>{" "}
        </Grid>
        {

          comments.message === 'no comments found!' ? (

            <h1>No Comments</h1>

            ) : (
              
              comments.map((comment) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={12}
                    style={{ padding: "10px" }}
                    className="d-flex border rounded p-4 gap-3 flex-column flex-lg-row"
                    key={comment._id}
                  >
                    <Grid className="d-flex flex-column" xs={6} md={4}>
                      <p className="main-color fw-500 ">Created at</p>
                      <p className="fw-500 ">{comment.createdAt.slice(0, 10)}</p>
                    </Grid>
                    <Grid className="d-flex flex-column" xs={6} md={6}>
                      <p
                        className="fw-500 d-flex justify-content-center align-items-center btn-access"
                        style={{ cursor: "pointer" }}
                        onClick={() => seeBodyComment(comment.body)}
                      >
                        see comment
                      </p>
                    </Grid>
                    {comment.answer === 0 ? (
                      <Grid className="d-flex flex-column" xs={6} md={6}>
                        <p
                          className="fw-500 d-flex justify-content-center align-items-center btn-access btn-sucessfull"
                          style={{ cursor: "pointer" }}
                          onClick={() => acceptComment(comment._id)}
                        >
                          accept comment
                        </p>
                      </Grid>
                    ) : (
                      <Grid className="d-flex flex-column" xs={6} md={6}>
                        <p
                          className="fw-500 d-flex justify-content-center align-items-center btn-access btn-reject"
                          style={{ cursor: "pointer" }}
                          onClick={() => rejectComment(comment._id)}
                        >
                          reject comment
                        </p>
                      </Grid>
                    )}
                    <Grid className="d-flex flex-column" xs={6} md={6}>
                      <p
                        className="fw-500 d-flex justify-content-center align-items-center btn-access"
                        style={{ cursor: "pointer" }}
                        onClick={() => answerComment(comment._id)}
                      >
                        answer comment
                      </p>
                    </Grid>
                    <Grid className="d-flex flex-column" xs={6} md={6}>
                      <p
                        className="fw-500 d-flex justify-content-center align-items-center btn-access"
                        style={{ cursor: "pointer" }}
                        onClick={() => banComment(comment.creator._id)}
                      >
                        ban comment
                      </p>
                    </Grid>
                    <Grid className="d-flex flex-column" xs={6} md={6}>
                      <p className=" fw-500 text-center ">Score</p>
                      <p
                        className="fw-500 d-flex justify-content-center align-items-center"
                        style={{ cursor: "pointer" }}
                      >
                       
                        {Array(comment.score)
                          .fill(0)
                          .map((score) => {
                            return <AiFillStar style={{fill : '#f64e60'}} />;
                          })}
                           {Array(5 - comment.score)
                          .fill(0)
                          .map((score) => {
                            return <AiOutlineStar style={{fill : '#f64e60'}} />;
                          })}
                      </p>
                    </Grid>
                    <div className="d-flex flex-column justify-content-center flex-row">
                      {comment.answer === 1 ? (
                        <MdDone style={{ color: "green", fontSize: "30px" }} />
                      ) : (
                        <RiForbid2Line style={{ color: "red", fontSize: "30px" }} />
                      )}
                    </div>
                    <Grid className="d-flex gap-2" xs={6} md={5}>
                      <Button
                        className="hover-icon  "
                        style={{ borderRadius: "100%", minWidth: "30px" }}
                      >
                        <EditIcon style={{ color: "#000" }} />
                      </Button>
                      <Button
                        className="hover-icon "
                        style={{ borderRadius: "100%", minWidth: "30px" }}
                        onClick={() => deletComment(comment._id)}
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
              })
              
          )
        
        
        }
      </Grid>
    </DataGrid>
  );
}
