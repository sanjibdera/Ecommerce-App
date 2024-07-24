import React from 'react'
import './AdminNavbar.css'
import { NavLink } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <div className="nav-logo">
        <p>Admin Panel</p>
      </div>
      <div className="nav-menu">
       <NavLink to='/allproduct'><div className="btn">All Product</div></NavLink>
       <NavLink to='/addproduct'><div className="btn">Add Product</div></NavLink>
       <NavLink><div className="btn">All Order</div></NavLink>
      </div>
      <div className="nav-options"> 
      </div>
    </div>
  )
}

export default AdminNavbar