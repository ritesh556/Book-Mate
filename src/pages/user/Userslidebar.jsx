import React from 'react'
import '../../styles/userslidebar.scss'


import UserPic from  '../../assets/user.jpg'

const Usersidebar = ({ name="Ritesh", email }) => {
  return (
    <div className='sidebar'>
        <div className='user-detail'>
        
            <div className="profile-img">
              
                <img src={UserPic} alt="Profile Pic" />
            </div>
            <div className="details">
                <span className='user-name'>{name}</span>
                <span className='user-email'>{email}</span>
            </div>
            <hr />
        </div>
        <div className='user-navs'>
            <ul>
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Settings</li>
                <li>Log out</li>
            </ul>
        </div>
    </div>
  )
}

export default Usersidebar
