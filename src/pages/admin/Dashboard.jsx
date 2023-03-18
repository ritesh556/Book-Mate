import React from 'react'
import Sidebar from '../../components/Sidebar'

import '../../styles/dashboard.scss'
import Widget from '../../components/Widget'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className="dashboard-container">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="request" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
