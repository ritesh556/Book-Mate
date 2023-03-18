import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import '../../styles/login-register.scss'



const Login = () => {
  const Navigate = useNavigate();
  const [error, seterror] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  
  const Handal_Sumitfor_Admin_Login = (event) => {
    event.preventDefault(); // prevent form from submitting and refreshing the page
    if (email === "root@root" && password === "admin") {
      // navigate to admin page if email and password match
      Navigate("/dashboard");
    }
    else{console.log("error")
    seterror(" incorrect Username or password")}
    setTimeout(() => {
      seterror("")
      
    }, 5000);
  }

  return (
    <div className='login-container'>
      <form className="login-form" onSubmit={Handal_Sumitfor_Admin_Login}>
          <h2 className="form-title">Login</h2>
          <div className="form-input">
            <input type="email" id="email" name="email" value={email} placeholder="Email" required onChange={(e) => setemail(e.target.value)}/>
          </div>
          <div className="form-input">
            <input type="password" id="password" name="password" value={password} placeholder="Password" required onChange={(e) => setpassword(e.target.value)}/>
            <Link to="forgetpassword">Forget Password?</Link>
          </div>
          <button type="submit" className="form-submit" >  Sign In </button>
          <p className='errormsg'>{error}</p>
          <Link to="/register">Don't have an account yet? Register here.</Link>
      </form>
    </div>
  )
}

export default Login