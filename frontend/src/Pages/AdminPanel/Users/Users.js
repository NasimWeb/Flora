import React, { useEffect, useState } from 'react'
import './Users.css'
import DataTable from '../../../Components/PanelAdmin/DataTable/DataTable'
import Inputs from '../../../Components/Inputs/Inputs'
import UseForm from "../../../Hooks/UseForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../../Components/vaidationRules/Rules";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import "animate.css";


export default function Users() {

  const [allUsers , setAllUsers] = useState([])


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
      phone: {
        value: "",
        isValid: false,
      },
    },
    false
  );



   useEffect(() => {
     getUsers()
   } , [])


 function getUsers () {
  const localStorageData = JSON.parse( localStorage.getItem('user'))
  fetch(`https://node-flora.liara.run/v1/users` , {
   headers : {
     'Authorization' : `Bearer ${localStorageData.token}` 
   }
  })
  .then(res => res.json())
  .then(allUsers => setAllUsers(allUsers))
 }

   const RigisterNewUser = (e) => {
    e.preventDefault()

    const newUser = {
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value,
      name: formState.inputs.name.value,
      phone: formState.inputs.phone.value,
    };

    fetch("https://node-flora.liara.run/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then(res => {
     if(res.ok){
      Swal.fire({
      title: (`${formState.inputs.username.value} has been created successfully`),
      icon:'success',
      timer:2000
      })
      getUsers()
     }else{
      Swal.fire({title:`user not rigister`,icon:"error"})
     }
    }) 
   }

   const removeUser = (userId) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://node-flora.liara.run/v1/users/${userId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "Deleted Successfully",
              text: "user has been deleted.",
              icon: "success",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
            getUsers()
          } else {
            Swal.fire({
              title: "error",
              text: "something went wrong! try again later.",
              icon: "error",
            });
          }
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Your imaginary user is safe :)",
          icon: "error",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    });
  };

  const banUser = (userId) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, ban it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://node-flora.liara.run/v1/users/ban/${userId}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "baned Successfully",
              text: "user has been baned.",
              icon: "success",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
            getUsers()
          } else {
            Swal.fire({
              title: "error",
              text: "something went wrong! try again later.",
              icon: "error",
            });
          }
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Your imaginary user is safe :)",
          icon: "error",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    });
  };


  
  return (
   <>
    <div className='container'>
      <div className='rigister-user mb-4 p-5'>
         <form className='d-flex gap-2 flex-wrap ' onSubmit={RigisterNewUser}>
          
        <div className='d-flex gap-3 flex-column flex-lg-row'>
          <label>Name</label>
          <Inputs
          id='name'
          type='text'
          element='input'
          className='input-form '
          placeholder='name'
          allValidations={[
            requiredValidator(),
            minValidator(3),
            maxValidator(20),
          ]}
          OnInputHandler={OnInputHandler}
          />
        </div>
        <div className='d-flex gap-3 flex-column flex-lg-row'>
        <label>UserName</label>
        <Inputs
          id='username'
          type='text'
          element='input'
          className='input-form '
          placeholder='username'
          allValidations={[
            requiredValidator(),
            minValidator(3),
            maxValidator(20),
          ]}
          OnInputHandler={OnInputHandler}
          />
        </div>
        <div className='d-flex gap-3 flex-column flex-lg-row'>
        <label>Email</label>
        <Inputs
          id='email'
          type='email'
          element='input'
          className='input-form '
          placeholder='email'
          allValidations={[
            requiredValidator(),
            minValidator(8),
            maxValidator(30),
            emailValidator(),
          ]}
          OnInputHandler={OnInputHandler}
          />
        </div>
        <div className='d-flex gap-3 flex-column flex-lg-row'>
        <label>Password</label>
        <Inputs
          id='password'
          type='password'
          element='input'
          className='input-form '
          placeholder='password'
          allValidations={[
            requiredValidator(),
            minValidator(8),
            maxValidator(15),
          ]}
          OnInputHandler={OnInputHandler}
          />
        </div>
        <div className='d-flex gap-3 flex-column flex-lg-row'>
        <label>Phone</label>
        <Inputs
          id='phone'
          type='text'
          element='input'
          className='input-form '
          placeholder='phone'
          allValidations={[
            requiredValidator(),
            minValidator(8),
            maxValidator(15),
          ]}
          OnInputHandler={OnInputHandler}
          />
        </div>
            <div className='d-flex gap-3 align-items-center'>
              <button className={`btn ${formState.isFormValid ? 'btn-success' : 'btn-danger'}`} disabled={!formState.isFormValid} onClick={RigisterNewUser}>Rigister New User</button>
              <button className='btn btn-danger' onClick={() => {
                Swal.fire({
                  title:'canceled',
                  icon: 'error',
                  timer:2000
                })
              }}>cancle</button>
            </div>
         </form>
      </div>
    </div>

   <DataTable > 
   
   <div className="d-flex mb-5">
      <TableContainer
        component={Paper}
        style={{ borderRadius: "20px", maxHeight: "400px" }}
      >
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <h4 className="p-3">List of Users</h4>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">phone</TableCell>
              <TableCell align="right">rigistered</TableCell>
              <TableCell align="right">role</TableCell>
              <TableCell align="right">edit User</TableCell>
              <TableCell align="right">delete User</TableCell>
              <TableCell align="right">ban User</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers.map((user, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">
                  {user.createdAt.slice(0, 10)}
                </TableCell>
                <TableCell align="right">{user.role}</TableCell>
                <TableCell align="right">
                  <button className="btn btn-success">edit</button>
                </TableCell>
                <TableCell align="right">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeUser(user._id)}
                  >
                    delete
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button
                    className="btn btn-danger"
                    onClick={() => banUser(user._id)}
                  >
                    ban
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
   
   </DataTable>
   
   </>
  )
}
