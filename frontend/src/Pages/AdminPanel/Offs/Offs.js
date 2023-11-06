import React, { useEffect }  from 'react'
import Inputs from '../../../Components/Inputs/Inputs'
import UseForm from "../../../Hooks/UseForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../../Components/vaidationRules/Rules";
import Swal from "sweetalert2";
import { useState } from 'react';
import DataGrid from '../../../Components/PanelAdmin/DataGrid/DataGrid'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function Offs() {

  const [courses,setCourses] = useState([])
  const [offCourses, setOffCourses] = useState('-1')
  const [offs , setOffs] = useState([])

  const [formState , OnInputHandler] = UseForm({
     
        code : {
            value : "",
            isValid : false,
        },

        percent : {
            value : '',
            isValid : false
        },

        max : {
            value : '',
            isValid : false
        }

     
  } , false)


 

  useEffect(  () => {
   getAllCourses()
   getAllOffs()
  } , [])

  function getAllOffs () {
    fetch('http://localhost:4000/v1/offs' , {
      headers : {
        Authorization : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
      }
    })
    .then(res => res.json())
    .then(allOffs => setOffs(allOffs))
  }

  function getAllCourses  () {
    fetch('http://localhost:4000/v1/courses')
    .then(res => res.json())
    .then(allcourses => setCourses(allcourses))
  }

  const createDiscountCode = (e) => {
       e.preventDefault()

       const discountCodeInfo = {
        code : formState.inputs.code.value,
        percent : formState.inputs.percent.value,
        course : offCourses,
        max : formState.inputs.max.value
       }


       if(offCourses === '-1') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please select a course!',
        })
       }else{
        fetch('http://localhost:4000/v1/offs' , {
          method : 'POST', 
          headers : {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`    
          },
          body : JSON.stringify(discountCodeInfo)
        }).then(res => {
          if(res.ok) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              text: 'discount code has been saved',
              showConfirmButton: false,
              timer: 2500
            })
            getAllOffs()
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!'
            })
            throw new Error(res.statusText)
          }
        }).catch(err => Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
        }))
       }

  }


  const removeDiscountCode = (codeId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      confirmButtonText :'Yes',
      showCancelButton : 'true'
    }).then(result => {
      if(result.isConfirmed) {
        fetch(`http://localhost:4000/v1/offs/${codeId}` , {
          method : 'DELETE',
          headers : {
            Authorization : `Berear ${JSON.parse(localStorage.getItem('user')).token}  `
          }
        }).then(res => {
          if(res.ok){
            Swal.fire({
              position: 'center',
              icon: 'success',
              text: 'discount code has been deleted',
              showConfirmButton: false,
              timer: 2500
            })
            getAllOffs()
          }else{
            Swal.fire({
              icon : 'error',
              title : 'Oops..',
              text : res.statusText,
            })
            throw new Error(res.statusText)
          }
        }).catch(err => {
          console.log(err);
        })
      }
    })
  }


  return (
   <>
    <div className='container'>
      <div className='rigister-user mb-4 p-5' style={{width : '100%'}}>
         <form className='d-flex gap-2 flex-wrap '>
          
        <div className='d-flex gap-3 flex-column flex-lg-row'>
          <label>discount Code</label>
          <Inputs
          id='code'
          type='text'
          element='input'
          className='input-form '
          placeholder='discount Code'
          allValidations={[
            requiredValidator(),
            minValidator(3),
            maxValidator(20),
          ]}
          OnInputHandler={OnInputHandler}
          />
        </div>

        <div className='d-flex gap-3 flex-column flex-lg-row'>
        <label>discount percent</label>
        <Inputs
          id='percent'
          type='text'
          element='input'
          className='input-form '
          placeholder='discount percent'
          allValidations={[
            requiredValidator(),
            minValidator(0),
            maxValidator(20),
          ]}
          OnInputHandler={OnInputHandler}
          />
        </div>

        <div className='d-flex gap-3 flex-column flex-lg-row'>
        <label>course</label>
           <select onChange={(e) => setOffCourses(e.target.value) }>
            <option value='-1'>please select course</option>
             {
              courses.map(course => {
                return (
                <option value={course._id} key={course._id}>{course.name}</option>
                )
              })
             }
           </select>
        </div>

        <div className='d-flex gap-3 flex-column flex-lg-row'>
        <label>discount max</label>
        <Inputs
          id='max'
          type='text'
          element='input'
          className='input-form '
          placeholder='discount max'
          allValidations={[
            requiredValidator(),
            minValidator(0),
            maxValidator(15),
          ]}
          OnInputHandler={OnInputHandler}
          />
        </div>
            <div className='d-flex gap-3 align-items-center flex-column flex-lg-row'>
              <button className={`btn ${formState.isFormValid ? 'btn-success' : 'btn-danger'}`} disabled={!formState.isFormValid} onClick={(e) => createDiscountCode(e)}>add new Didcount code</button>
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
   
    <DataGrid>
      <div className='container'>
        <div className='row'>

    <Grid container rowGap={2} columnGap={1} className='properties-list p-4'>
    <Grid item xs={12} md={12} className='d-flex gap-3 align-items-center' ><h4 className='pb-3'>Offs</h4> </Grid>
    {
     
     offs.map ? (

       offs.map((off) => {
       return (
      
        <Grid item xs={12} md={12} style={{padding : '10px'}} className='d-flex flex-wrap border rounded p-4 flex-column flex-lg-row' key={off._id}>
       <Grid className='d-flex flex-column' xs={12} md={3}>
         <p className='main-color fw-500 '>Code</p>
         <p className='fw-500 '>{off.code}</p>
       </Grid>
       <Grid className='d-flex flex-column' xs={12} md={3}>
         <p className='main-color fw-500 '>Percent</p>
         <p className='fw-500 '>{off.percent}</p>
       </Grid>
       <Grid className='d-flex flex-column' xs={12} md={3}>
         <p className='main-color fw-500 '>Max</p>
         <p className='main-color fw-500'>{off.max}</p>
       </Grid>
       <Grid className='d-flex gap-2' xs={12} md={3}>
        <Button className='hover-icon  ' style={{borderRadius : '100%' , minWidth : '30px'}}><EditIcon style={{color : '#000'}}   /></Button>
        <Button  className='hover-icon '   style={{borderRadius : '100%' , minWidth : '30px'}} onClick={() => removeDiscountCode(off._id)}> <DeleteIcon className='dlelet-icon' style={{color : 'rgb(205, 24, 24)'}} /></Button>
       </Grid>
     </Grid>
      
       )
         
       })
     ): (
      ''
     )


      
    }
  
  </Grid>

        </div>

      </div>
  </DataGrid>
   </>
  )
}
