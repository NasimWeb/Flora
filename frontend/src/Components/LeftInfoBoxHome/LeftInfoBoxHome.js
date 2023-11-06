import React, { useRef } from 'react'
import './LeftInfoBoxHome.css'
import {CiLocationOn} from 'react-icons/ci'

export default function LeftInfoBoxHome({price , title , location , beds , baths , parking}) {


  return (
    <div className='leftInfoBox p-4 d-none d-lg-block' data-aos="flip-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
        <span className='price-info-home  d-flex flex-end mb-3'>{price}</span>
        <p className='title-info-home d-flex flex-end mb-4'>{title}</p>
        <div className='d-flex gap-5'>
           <div className='d-flex gap-3'>
           <img src='./Images/Group.png' />  
           <span>{beds}</span>  
            </div>         
           <div className='d-flex gap-3'>
           <img src='./Images/Group (1).png' /> 
           <span>{baths}</span> 
           </div>
           <div className='d-flex gap-3'>
           <img src='./Images/Group (2).png' />
           <span>{parking}</span>
            </div>         
        </div>
         <div className='d-flex mt-4'>
             <CiLocationOn style={{fontSize : '30px'}} />
             <p>{location}</p>
         </div>
    </div>
  )
}
