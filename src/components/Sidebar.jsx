import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/sidebar.scss'
import logo from '../assets/logo-white.png'

const Sidebar = () => {
  const location = useLocation();

  const isActiveLink = (linkPath) => {
    return location.pathname === `/dashboard/${linkPath}`;
  }

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
        <Link to="/dashboard">
  <li className='active'>Dashboard</li>
        </Link>
          <li>
            <Link to="/dashboard/profile/admin/users" className={isActiveLink('profile/admin/users') ? 'active' : ''}>
              Users
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile/admin/Books" className={isActiveLink('profile/admin/Books') ? 'active' : ''}>
              Books
            </Link>
          </li>
          <li>Stats</li>
          <li>
            <Link to="/dashboard/profile/admin/notification" className={isActiveLink('profile/admin/notification') ? 'active' : ''}>
              Notifications
            </Link>
          </li>
          <li>Setting</li>
          <li>Profile</li>
          <li> <Link to="/login"> Log out </Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
