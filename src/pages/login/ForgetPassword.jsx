import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <div className='forgetpassword-container'>
        <form className="forgetpassword-form">
            <h2 className="form-title">Forget Password</h2>
            <div className="form-input">
            <input type="email" id="email" name="email" placeholder="Email" required/>
            </div>
            <button type="submit" className="form-submit"><Link to="/login/forgetpassword/enterotp">Send Verification Code</Link></button>
        </form>
    </div>
  )
}

export default ForgetPassword
