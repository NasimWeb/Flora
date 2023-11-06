import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="container d-none d-lg-flex">
    <div className="navbar">
  <Link to="/" className="logo">
    <img src="/./Images/Group 41.png" />
  </Link>
  <div className="menus">
    <ul className="d-flex gap-3 align-items-center">
      <Link to="/">
        <li  className="menuitem">Home</li>
      </Link>
      <Link to="/aboutus">
        <li className="menuitem">About Us</li>
      </Link>
      <Link to="/Category-info/services">
        <li className="menuitem">Services</li>
      </Link>
      <Link to="/contactus">
        <li className="menuitem">Contact Us</li>
      </Link>
    </ul>
  </div>
  </div>

</div>
  )
}
