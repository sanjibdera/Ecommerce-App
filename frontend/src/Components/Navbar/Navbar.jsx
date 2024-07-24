import React, { useContext } from 'react'
import './Navbar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = () => {


  const {token, setToken, adminStatus, setAdminStatus, setCartItems} = useContext(StoreContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setToken("");
    localStorage.removeItem("admin");
    setAdminStatus(false)
    setCartItems({});
    navigate("/");
    alert("Signout Successful")
  }


  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <h2>Easy Shopping</h2>
      </div>
      <div className="navbar-links">
        <ul>
          <li><NavLink to={'/'} style={{textDecoration: 'none', color: 'whitesmoke'}}>Home</NavLink></li>
          <li><NavLink to={'/men'} style={{textDecoration: 'none', color: 'whitesmoke'}}>Men</NavLink></li>
          <li><NavLink to={'/women'} style={{textDecoration: 'none', color: 'whitesmoke'}}>Women</NavLink></li>
          <li><NavLink to={'/kids'} style={{textDecoration: 'none', color: 'whitesmoke'}}>Kids</NavLink></li>
        </ul>
      </div>
      <div className="navbar-options">
        {
          adminStatus ? <button><Link to={'/allproduct'} style={{textDecoration: 'none', color: 'black'}}>Admin</Link></button>
          : <></>
        }
        {
          token ? <button onClick={logout}>Sign Out</button>
          : <button><Link to={'/login'} style={{textDecoration: 'none', color: 'black'}}>Sign In</Link></button>
        }
        <button><Link to={'/cart'} style={{textDecoration: 'none', color: 'black'}}>Cart</Link></button>
      </div>
    </div>
  )
}

export default Navbar