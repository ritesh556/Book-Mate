import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.scss'
// import User from '../assets/user.jpg'
import logo from '../assets/logo-white.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='admin-detail'>
            <div className="profile-img">
                <img src={logo} alt="Profile Pic" />
            </div>
            <div className="details">
                <span className='admin-name'>Ritesh Nepal</span>
                <span className='admin-address'>Biratnagar, Morang</span>
            </div>
            <hr />
           
        </div>
        <div className='admin-navs'>
            <ul>
                <li>Dashboard</li>
               <Link to={"profile/admin/users"}> <li>Users</li> </Link>
               <Link to={"profile/admin/Books"}> <li>Books</li> </Link>
                <li>Stats</li>
                <Link to={"profile/admin/notification"}> <li>Notifications</li> </Link>
                <li>Setting</li>
                <li>Profile</li>
                <li>Log out</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
