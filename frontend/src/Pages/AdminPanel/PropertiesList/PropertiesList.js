import React, { useEffect, useState } from 'react'
import './PropertiesList.css'
import DataGrid from '../../../Components/PanelAdmin/DataGrid/DataGrid'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Properties() {

   const [allProperties , setAllProperties] = useState([])


   useEffect(()=> {
    fetch('https://json-server-flora.iran.liara.run/properties')
    .then(res => res.json())
    .then(propertie => setAllProperties(propertie))
   } , [])



  return (
    
  
  <DataGrid>
    <Grid container rowGap={2} columnGap={1} className='properties-list p-4'>
    <Grid item xs={6} md={12} className='d-flex gap-3 align-items-center' ><h4 className='pb-3'>Properties</h4>  </Grid>
    {
      allProperties.map((properties) => {
      return (
        <Grid item xs={12} md={12} style={{padding : '10px'}} className='d-flex border rounded p-3  flex-column flex-lg-row' key={properties.id}>
        <Grid className='d-flex flex-column ' xs={6} md={12}>
          <p className='main-color fw-500 '>Title</p>
          <p className='fw-500 '>{properties.title}</p>
        </Grid>
        <Grid className='d-flex flex-column' xs={6} md={12}>
          <p className='main-color fw-500 '>Categoty</p>
          <p className='fw-500 '>Properties</p>
        </Grid>
        <Grid className='d-flex flex-column' xs={6} md={12}>
          <p className='main-color fw-500 '>Price</p>
          <p className='fw-500 '>{properties.price === 0 ? 'free' : properties.price.toLocaleString()}</p>
        </Grid>
        <Grid className='d-flex gap-2' xs={6} md={12}>
         <Button className='hover-icon  ' style={{borderRadius : '100%' , minWidth : '30px'}}><EditIcon style={{color : '#000'}}   /></Button>
         <Button  className='hover-icon '   style={{borderRadius : '100%' , minWidth : '30px'}}> <DeleteIcon className='dlelet-icon' style={{color : 'rgb(205, 24, 24)'}} /></Button>
        </Grid>
      </Grid>
      )
        
      })
    }
  
  </Grid>
  </DataGrid>
      
    
  )
}
