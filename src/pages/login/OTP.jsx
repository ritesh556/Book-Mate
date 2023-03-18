import React from 'react'

const OTP = () => {
  return (
       <div className='otp-container'>
            <form className="otp-form">
                <h2 className="form-title">Enter OTP</h2>
                <div className="form-input">
                <input type="text" id="otp" name="otp" placeholder="Enter OTP" required/>
                </div>
                <button type="submit" className="form-submit">Confirm</button>
            </form>
        </div>
  )
}

export default OTP
