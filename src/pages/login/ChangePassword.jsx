import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/login-register.scss'

const ChangePassword = () => {
  return (
    <div className='changepassword-container'>
        <form className="changepassword-form">
            <h2 className="form-title">Change Password</h2>
            <div className="form-input">
            <input type="password" id="current-password" name="current-password" placeholder="Current Password" required/>
            </div>
            <div className="form-input">
            <input type="password" id="new-password" name="new-password" placeholder="New Password" required/>
            <Link to="/login/forgetpassword">Forget Password?</Link>
            </div>
            <button type="submit" className="form-submit">Confirm</button>
        </form>
  </div>
  )
}

export default ChangePassword
