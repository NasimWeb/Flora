import React, { useState } from 'react'
import './Sidebar.css'
import {TbBrandGoogleAnalytics} from 'react-icons/tb'
import {RiFileChart2Line} from 'react-icons/ri'  
import {SiTraefikproxy} from 'react-icons/si'  
import {MdKeyboardArrowRight} from 'react-icons/md'  
import {BiLogOut} from 'react-icons/bi'  
import {MdCalendarMonth} from 'react-icons/md'  
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import authContext from '../../../Contexts/authContext'
import 'animate.css';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { Link } from 'react-router-dom'


export default function Sidebar({show}) {

  const AuthContext = useContext(authContext)
  const navigate = useNavigate()

  const [isShowSubmenu , setIsShowSubmenu] = useState(false)
 
  const LogOutAdmin = () => {

   Swal.fire({
    title : 'are you sure to logout ? ',
    showCloseButton: true,
    showCancelButton : true,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    icon: 'warning',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',

   }).then(result => {
    if(result.isConfirmed) {
      navigate('/')
      AuthContext.logOut()
    }
   })

  }



  return (
    <div className={` ${show === true ? ('sidebar mini_sidebar') : ('sidebar p-4')} `}>
    <div className={`logo d-flex align-items-center mt-3 ${show === true ? ('justify-content-center') : ('')}`}>
        <Link to='' className='d-flex align-items-center'>
          <img src='/./Images/icons8-logo-50.png'  style={{width : '25px'}} />
        <h2 className='logo-text'>{show === true ? ('') : ('FLora')}</h2>
        </Link>
    </div>
    <div className='sidebar-menu mt-5'>
    <p className='sidebar-title-menu mb-3'>Features</p>
          <ul className='d-flex flex-column gap-4'>
            <li><NavLink className={`text-white sidebar-menu-link ${(isActive) => { 
              if(isActive){
                return 'active'
                }else{
                  return ''
                } 
                }}` } to=' ' ><TbBrandGoogleAnalytics />{show === true ? ('') : (<span>Main page</span>)} </NavLink></li>
           
          </ul>
    </div>
    <div className='sidebar-menu mt-5'>
        <p className='sidebar-title-menu mb-3'>CUSTOM</p>
          <ul className='d-flex flex-column gap-4'>
            <li><NavLink className='text-white sidebar-menu-link' to='users' ><TbBrandGoogleAnalytics /> {show === true ? ('') : (<span>Users</span>)}</NavLink></li>
            <li><NavLink className='text-white sidebar-menu-link' to='contact'><RiFileChart2Line /> {show === true ? ('') : (<span>Contact Messages</span>)}</NavLink></li>
          </ul>
    </div>
    <div className='sidebar-menu mt-5'>
        <p className='sidebar-title-menu mb-3'>Features</p>
          <ul className='d-flex flex-column gap-4'>
            <li onClick={LogOutAdmin}><NavLink className='text-white sidebar-menu-link' to='javascript:void(0)'><BiLogOut  /> {show === true ? ('') : (<span>LogOut</span>)}</NavLink></li>
          </ul>
    </div>
   </div>
  )
}
