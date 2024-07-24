import { useContext, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {StoreContext} from '../../Context/StoreContext'


const Login = () => {

  const navigate = useNavigate();
  const {url, setToken, setAdminStatus} = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let userData = {
    email: email,
    password: password
  }


  const onLogin = async (event) => {
    event.preventDefault();

    const response = await axios.post(url + "/user/login", userData);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      if (email === "admin@gmail.com") {
        setAdminStatus(true);
        localStorage.setItem("admin", "admin@gmail.com")
      } else {
        setAdminStatus(false);
      }
      alert("Signin Successful")
      navigate("/");
    } else {
      alert(response.data.message);
    }
  }


  return (
    <div className="login">
      <form className='login-form' onSubmit={onLogin}  action="">
        <div className="login-state">
          <h2>Sign In</h2>
          <Link to={'/'} style={{textDecoration: 'none'}}><p>X</p></Link>
        </div>
        <div className="login-inputs">
        <input type="email" placeholder='Email' required name='email' onChange={e => setEmail(e.target.value)} value={email} id="email" />
        <input type="password" placeholder='Password' required name='password' onChange={e => setPassword(e.target.value)} value={password} id="password" />
        </div>
        <button type='submit'>Sign In</button>
        <div className="login-condition">
          <input type="checkbox" required name="" id="" />
          <p>By continuing, i agree to the terms & condition and privacy policy.</p>
        </div>
        <p>Create a new account? <Link to={'/register'} style={{textDecoration: 'none'}}><span>Register here</span></Link></p>
      </form>
    </div>
  )
}

export default Login