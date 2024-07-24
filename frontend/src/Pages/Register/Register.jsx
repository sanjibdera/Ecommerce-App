import React, { useContext, useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import axios from "axios"

const Register = () => {

  const {url, setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let userData = {
    name: name,
    email: email,
    password: password
  }


  const onLogin = async (event) => {
    event.preventDefault();

    const response = await axios.post(url + "/user/register", userData);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      alert("Signup Successful");
      navigate("/")
    } else {
      alert(response.data.message);
    }
  }



  return (
    <div className="register">
      <form className='login-form' onSubmit={onLogin}  action="">
        <div className="login-state">
          <h2>Sign Up</h2>
          <Link to={'/'} style={{textDecoration: 'none'}}><p>X</p></Link>
        </div>
        <div className="login-inputs">
          <input type="text" name='name' onChange={e => setName(e.target.value)} value={name} id='name' placeholder='Name' required />
          <input type="email" placeholder='Email' required name='email' onChange={e => setEmail(e.target.value)} value={email} id="email" />
          <input type="password" placeholder='Password' required name='password' onChange={e => setPassword(e.target.value)} value={password} id="password" />
        </div>
        <button type='submit'>Register</button>
        <div className="login-condition">
          <input type="checkbox" required name="" id="" />
          <p>By continuing, i agree to the terms & condition and privacy policy.</p>
        </div>
        <p>Create a new account? <Link to={'/login'} style={{textDecoration: 'none', color: 'black'}}><span>Sign in here</span></Link></p>
      </form>
    </div>
  )
}

export default Register