import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/login-register.scss'

const Register = () => {
  return (
    <div className='register-container'>
      <form className="register-form">
          <h2 className="form-title">Register</h2>
          <div className="form-input">
            <input type="text" id="username" name="username" placeholder="Username" required />
          </div>
          <div className="form-input">
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-input">
            <input type="text" id="address" name="address" placeholder="Address" required />
          </div>
          <div className="form-input">
            <input type="password" id="password" name="password" placeholder="Password" required />
          </div>
          <div className="form-input">
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
          </div>
          <button type="submit" className="form-submit">Sign Up</button>
          <Link to="/login">Already have an account? Login here</Link>
        </form>
    </div>
  )
}

export default Register
