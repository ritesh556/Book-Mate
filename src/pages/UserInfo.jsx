import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/userinfo.scss'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {CiEdit} from 'react-icons/ci'

import User from '../assets/user.jpg'


const UserInfo = () => {
  const navigate = useNavigate();
  const paraStyle = {
    textDecoration:'underline',
    color:'blue', 
    cursor:'pointer'
  }
  return (
    <div className='profile container'>
      <div className='profile-pic-bio'>
        <img className='profile-pic' src={User} alt="user" />
        <p className="username">Travis Bishwakarma</p>
        <div className="social-icons">
            <span><BsFacebook className='icon'/></span>
            <span><BsInstagram className='icon'/></span>
            <span><BsTwitter className='icon'/></span>
        </div>
        <p className='edit-details' style={paraStyle}>Edit Details</p>
        <p className='edit-details' style={paraStyle} onClick={()=>navigate('/profile/changepassword')}>Change Password</p>
      </div>
      <div className='profile-details'>
        <h2>Personal Details</h2>
        
        <h3>Bio</h3>
        <p className='bio'>I am a human being, living and breathing on this planet. I have my own unique set of experiences, beliefs, and characteristics that make me who I am. I enjoy spending time with my friends and family, exploring new places, and learning about different cultures. I have a strong work ethic and am always looking for ways to improve myself both personally and professionally. Overall, I would describe myself as a kind, curious, and motivated individual who is constantly striving to become the best version of myself.</p>
        <div className="profile-info">
            <p>Fullname: Travis Bishwakarma <CiEdit className='edit-icons'/></p>
            <p>Email: Travis@hotmail.com <CiEdit className='edit-icons'/></p>
            <p>Address: New York, NY, United States <CiEdit className='edit-icons'/></p>
            <p>Interests: Science Fiction, Programming <CiEdit className='edit-icons'/> </p>

            <h3>Books Shared</h3>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
