import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/navbar.css"
import logo from "../components/vlab.png"

function Navbar() {
  return (
    <>
    <nav>
      <Link className='header' to="/">
        <img className='logo' src={logo} alt="Logo" />
        Virtual Lab
      </Link>
      <Link className='title' to="/">Home</Link>
      <Link className='title' to="/about">About</Link>
      <Link className='title' to="/sub">Subjects</Link>
      <Link className='title' to="/signup">Signup</Link>
      <Link className='title' to="/login">Login</Link>
      <Link className='title' to="/Adminlog">Adminlog</Link>
    </nav>
    </>
  )
}

export default Navbar



/* <select>
            <option><Link className='title' to="/ssignup">Seller Signup</Link></option>
            <option><Link className='title' to="/bsignup">Buyer Signup</Link></option>
        </select>

        <select>
            <option><Link className='title' to="/slogin">Seller Login</Link></option>
            <option><Link className='title' to="/blogin">Buyer login</Link></option>
</select> */