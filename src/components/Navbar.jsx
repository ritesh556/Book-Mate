import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () =>{
    setOpen(!open);
  }
  return (
    <div>
      <nav className={`navbar ${open ? "open" : ""}`}>
        <p className='logo'>BOOK <span>MATE</span></p>
        <ul className="nav-list">
          <li className="nav-list-items"><Link to="">Home</Link></li>
          <li className="nav-list-items"><Link to="library">Library</Link></li>
          <li className="nav-list-items"><Link to="dashboard">Dashboard</Link></li>
          <li className="nav-list-items"><Link to="login">Login</Link></li>
          <li className="nav-list-items"><Link to="register">Register</Link></li>
        </ul>

        {/* HAMBURGER ICON */}
        <div className="burger" onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  )
}
