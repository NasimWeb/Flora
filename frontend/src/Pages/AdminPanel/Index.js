import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Index.css";
import Sidebar from "../../Components/PanelAdmin/Sidebar/Sidebar";
import Topbar from "../../Components/PanelAdmin/TopBar/Topbar";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiFileChart2Line } from "react-icons/ri";
import { SiTraefikproxy } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";
import { MdCalendarMonth } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import authContext from "../../Contexts/authContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import {AiOutlineClose} from 'react-icons/ai'

export default function Index() {
  
  const [show, setShow] = useState();
  const [showMobileOffCanvans, setShowMobileOffCanvans] = useState();
  const AuthContext = useContext(authContext);
  const navigate = useNavigate();
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);

  const LogOutAdmin = () => {
    Swal.fire({
      title: "are you sure to logout ? ",
      showCloseButton: true,
      showCancelButton: true,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      icon: "warning",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
        AuthContext.logOut();
      }
    });
  };

 

  return (
    <>
      <div className="main-Page d-flex">
        <Sidebar show={show} />
        <div className="content">
          <div className="container mt-5" style={{ paddingInline: "2rem" }}>
            <Topbar
              show={show}
              setShow={setShow}
              showMobileOffCanvans={showMobileOffCanvans}
              setShowMobileOffCanvans={setShowMobileOffCanvans}
            />
            <Outlet />
          </div>
        </div>

        <Offcanvas
          show={showMobileOffCanvans}
          variant='dark'
          scroll={true}
          backdrop={true}
          responsive="lg"
          onHide={() => setShowMobileOffCanvans(!showMobileOffCanvans)}
          className="d-lg-none text-white"
          style={{backgroundColor : '#1e1e2d' }}
        >
          <Offcanvas.Header >
            <Offcanvas.Title>
              <div className={`logo d-flex align-items-center mt-3`}>
                <Link to="" className="d-flex align-items-center">
                  <img
                    src="/./Images/icons8-logo-50.png"
                    style={{ width: "25px" }}
                  />
                  <h2 className="logo-text">FLora</h2>
                </Link>
              </div>
            </Offcanvas.Title>
          <AiOutlineClose onClick={() => setShowMobileOffCanvans(false)} style={{fonrSize: '25px'}} />
          </Offcanvas.Header>
          <Offcanvas.Body>
          <div className='sidebar-menu mt-5'>
    <p className='sidebar-title-menu mb-3'>Features</p>
          <ul className='d-flex flex-column gap-4'>
            <li><NavLink className={`text-white sidebar-menu-link ${(isActive) => { 
              if(isActive){
                return 'active'
                }else{
                  return ''
                } 
                }}` } to=' ' ><TbBrandGoogleAnalytics /><span>Main page</span> </NavLink></li>
            <li><NavLink className='text-white sidebar-menu-link' to='properties'><RiFileChart2Line /> <span>properties</span></NavLink></li>
            <li><NavLink className='text-white sidebar-menu-link' to='comments'><RiFileChart2Line /> <span>Comments</span></NavLink></li>
            <li onClick={() => setIsShowSubmenu(!isShowSubmenu)}><NavLink className='text-white sidebar-menu-link' to='javascript:void(0)'><SiTraefikproxy /> <><span>Services</span> <MdOutlineKeyboardArrowDown /></></NavLink>
             {
              isShowSubmenu && (
              <ul className='submenu-sidebar p-3 d-flex flex-column gap-2'>
              <NavLink className='text-white' to='category'><li> Category</li></NavLink>
              <NavLink className='text-white' to='services'><li> Services</li></NavLink>
             </ul>
              )
             }
            </li>
          </ul>
    </div>
    <div className='sidebar-menu mt-5'>
        <p className='sidebar-title-menu mb-3'>CUSTOM</p>
          <ul className='d-flex flex-column gap-4'>
            <li><NavLink className='text-white sidebar-menu-link' to='users' ><TbBrandGoogleAnalytics /> <span>Users</span></NavLink></li>
            <li><NavLink className='text-white sidebar-menu-link' to='contact'><RiFileChart2Line /> <span>Contact Messages</span></NavLink></li>
            <li><NavLink className='text-white sidebar-menu-link' to='offs'><MdCalendarMonth /> <span>Offs</span></NavLink></li>
          </ul>
    </div>
    <div className='sidebar-menu mt-5'>
        <p className='sidebar-title-menu mb-3'>Features</p>
          <ul className='d-flex flex-column gap-4'>
            <li><NavLink className='text-white sidebar-menu-link' to='tikets' ><TbBrandGoogleAnalytics /> <span>Tikets</span></NavLink></li>
            <li><NavLink className='text-white sidebar-menu-link' to='articels'><RiFileChart2Line /> <span>Articles</span></NavLink></li>
            <li onClick={LogOutAdmin}><NavLink className='text-white sidebar-menu-link' to='javascript:void(0)'><BiLogOut  /> <span>LogOut</span></NavLink></li>
          </ul>
    </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}
