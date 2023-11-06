import React, { useContext, useEffect, useState } from "react";
import { SiCodefactor } from "react-icons/si";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiNotificationBadgeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Topbar.css";
import Swal from "sweetalert2";

export default function Topbar({show , setShow , showMobileOffCanvans , setShowMobileOffCanvans}) {


  const [adminInfo , setAdminInfo] = useState({})
  const [adminInfoMassegeCount , setAdminInfoMessageCount] = useState(null)
  const [isShowNotif , setIsShowNotif] = useState(false)

  useEffect( () => {
      const localhostData = JSON.parse(localStorage.getItem('user'))

      async function fetchData() {
        await fetch('http://localhost:4000/v1/auth/me' , {
           headers : {
             Authorization : `Bearer ${localhostData.token}`
           }
         }).then(res => {
           if(res.ok) {
            return res.json().then( result => setAdminInfo(result))
           }else {
             Swal.fire({
               title : 'you are not admin',
               icon:'error',
               timer : 2000
             })
           }
         }) 
       }
      fetchData()
  } , [])


  const toggleSidebar = () => {
    setShow(!show)
  }

  const showMobileSidebar = () => {
    setShowMobileOffCanvans(!showMobileOffCanvans)
  }

  function seeNotification  (notifId)  {
    
   fetch(`http://localhost:4000/v1/notifications/see/${notifId}`,{
    method:'PUT',
    headers:{
      Authorization:`Bearer ${JSON.parse(localStorage.getItem("user")).token}`
    }
   }).then(res => {
          if(res.ok) {
            return res.json()
          }else{
            return res.text().then(err => console.log(err))
          }
   })
  } 


  return (
    <div className="Topbar p-4 mb-3">
      <div className="d-flex justify-content-between">
        <div className="menubar">
          <SiCodefactor style={{ fontSize: "20px", cursor: "pointer" , color :'#f64e60' , transition: '.3s' }} onClick={() => 
          {
            toggleSidebar()
            showMobileSidebar()
          }
            } />
        </div>
        <div className="profile d-flex gap-2 align-items-center">
          <div className="position-relative">
            <IoMdNotificationsOutline 
            onMouseEnter={() => setIsShowNotif(true) }
              style={{ fontSize: "29px", cursor: "pointer" }}
            />
            <span className="badg">2</span>
            <div className={`position-absolute p-4 dropdown-notification  ${isShowNotif && 'dropdown-notification-active'}`}
             onMouseEnter={() => setIsShowNotif(true) }
             onMouseLeave={() => setIsShowNotif(false)}
            >
               <ul className="d-flex flex-column gap-2">
                {
                  adminInfo.notifications  ? (
                    adminInfo.notifications.map((notif,index) => {
                      return (
                    <li key={index} className="d-flex gap-3 justify-content-between">
                    {notif.msg}
                    <Link to='javascript:void(0)' className="btn-access" onClick={() => seeNotification(notif._id)} >Got it</Link>
                    </li>
                      )
                    })
                      
                  ) : (
                    <li className="text-danger">No Massage</li>
                  )
                }
               </ul>
            </div>
          </div>
          <div className="position-relative">
            <RiNotificationBadgeLine
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
            <span className="badg">{2}</span>
          </div>
          <img src="/./Images/profile.jpg" alt="profile" title="profile" />
        </div>
      </div>
    </div>
  );
}
