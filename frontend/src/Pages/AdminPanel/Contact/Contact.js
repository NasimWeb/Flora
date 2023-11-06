import React, { useEffect, useState } from 'react'
import './Contact.css'
import DataGrid from '../../../Components/PanelAdmin/DataGrid/DataGrid'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import {MdDone} from 'react-icons/md'
import {RiForbid2Line} from 'react-icons/ri'

export default function Contact() {

   const [allContactsMessage , setAllContactsMessage] = useState([])
   const [isMessageSent ,setIsMessageSent ] = useState(false)
  

   

    useEffect(() => {
      getConatctMassage()
    } , [])

    function getConatctMassage () {
      fetch('http://localhost:4000/v1/contact')
      .then(res => res.json())
      .then(result => setAllContactsMessage(result))
    }
   
    
    const showMessageContact = (message) => {
       Swal.fire({
          html:`<div class="text-center"> <h5> ${message} </h5></div>`
       })
    }
         
    const answerToUser = (userEmail) => {

      setIsMessageSent(true)

      const localStorageData = JSON.parse(localStorage.getItem('user'))

      Swal.fire({
        text:"Write your message",
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Send Answer',
        showLoaderOnConfirm: true,
      }).then( (result) => {
         if(result.isConfirmed) {
            const contactInfoMessage = {
              email : userEmail,
              answer : result.value
            }

             fetch(`http://localhost:4000/v1/contact/answer`,{
              method : 'POST',
              headers : {
                'Content-Type' : 'application/json' , 
                'Authorization' : `Bearer ${localStorageData.token} `
              },
              body : JSON.stringify(contactInfoMessage)
             }).then(res => {
              if(res.ok) {
                res.json()
                Swal.fire({
                  title : 'message sent successfully',
                  icon : 'success'
                })
              }else{
                 throw new Error(res.statusText)
              }
             }).catch((error) => {
                  Swal.fire({
                    title : error,
                    icon : 'error'
                  })
             }) 
         }
      })
    }

 
    const deletConatct = (contactId) => {
       const localStorageData = JSON.parse(localStorage.getItem('user'))
      
       Swal.fire({
        title:'Are you sure to Remove ?',
        icon: "warning",
        showCancelButton:true,
       }).then((result) => {
            if(result.isConfirmed){
              fetch(`http://localhost:4000/v1/contact/${contactId}`, {
                method : 'DELETE',
                headers : {
                  'Authorization' : `Bearer ${localStorageData.token}`
                }
              }).then(res => {
                if(res.ok) {
                  Swal.fire("Deleted!", "Your Contact Message has been deleted.", "success");
                  getConatctMassage()
                }else{
                  throw new Error(res.statusText);
                }
              }).catch((error) => {
                console.log(`${error}`)
                Swal.fire({
                  title:`${error}`,
                  icon:"error",
                })
              })
            }
       })
    }


  return (
    <>
     <DataGrid>
     <Grid container rowGap={2} columnGap={1} className='properties-list p-4'>
    <Grid item xs={12} md={12} className='d-flex gap-3 align-items-center' ><h4 className='pb-3'>Contacts</h4>  </Grid>
    {
      allContactsMessage.map((contact) => {
      return (
        <Grid item xs={12} md={12} style={{padding : '10px'}} className='d-flex border rounded gap-3  p-3 flex-column flex-lg-row' key={contact._id}>
        <Grid className='d-flex flex-column' xs={12} md={6}>
          <p className='main-color fw-500 '>Name</p>
          <p className='fw-500 '>{contact.name}</p>
        </Grid>
        <Grid className='d-flex flex-column' xs={12} md={6}>
          <p className='main-color fw-500 '>phone</p>
          <p className='fw-500 '>{contact.phone }</p>
        </Grid>
        <Grid className='d-flex flex-column flex-wrap' style={{overflow : 'hidden'}} xs={12} md={12}>
          <p className='main-color fw-500 '>Email</p>
          <p className='fw-500' style={{maxWidth : '177px'}}>{contact.email }</p>
        </Grid>
        <Grid className='d-flex flex-column' xs={12} md={6}>
          <p className='main-color fw-500 '>Created at</p>
          <p className='fw-500 '>{contact.createdAt.slice(0,10) }</p>
        </Grid>
        <Grid className='d-flex flex-column' xs={12} md={6}>
          <p className='fw-500 d-flex justify-content-center align-items-center btn-access' style={{cursor : 'pointer'}} onClick={() => showMessageContact(contact.body)} >See Message</p>
        </Grid>
        <Grid className='d-flex flex-column' xs={12} md={6}>
          <p className='fw-500 d-flex justify-content-center align-items-center btn-access' style={{cursor : 'pointer'}} onClick={() => answerToUser(contact.email)} >Asnwer</p>
        </Grid>
        <Grid xs={1} md={1}>
         <Button  className='hover-icon'  style={{borderRadius : '100%' , minWidth : '30px'}} onClick={() => deletConatct(contact._id)}> <DeleteIcon className='dlelet-icon' style={{color : 'rgb(205, 24, 24)'}} /></Button>
        </Grid>
        <Grid className={`d-flex flex-column flex-wrap`} style={{overflow : 'hidden'}} xs={8} md={8}>
         {contact.answer === 1 ? ( <MdDone style={{color : 'green' , fontSize : '30px'}} />) : <RiForbid2Line />}
        </Grid>
      </Grid>
      )
        
      })
    }
  
  </Grid>
     </DataGrid>
    </>
  ) 
}
