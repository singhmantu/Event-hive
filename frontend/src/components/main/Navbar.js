import React from 'react'
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../context/UserProvider';

const Navbar = () => {

  const {loggedIn, setLoggedIn, logout} = useUserContext();

  const showLoggedInLinks = () => {
    if(loggedIn){
      return <>
        <NavLink to="/main/login" className="btn btn-link px-3 me-2">
            Login
          </NavLink>
          <NavLink to="/main/signup" className="btn btn-primary me-3">
            Sign up for free
          </NavLink>
      </>
    }else{
      return <>
          <button className='btn btn-danger' onClick={logout}>Logout</button>
      </>
    }
  }

  return (
<>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* Container wrapper */}
    <div className="container">
      {/* Navbar brand */}
      <a className="navbar-brand me-2" href="https://mdbgo.com/">
        <img
          src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1707/faysalfarhan170701026/81884828-events-calendar-icon-isolated-on-glassy-green-round-button-abstract-illustration.jpg"
          height={30}
        />
      </a>
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink className="nav-link" to="/main/home">
              Home
            </NavLink>
            </li><li className="nav-item">
            <NavLink className="nav-link" to="/main/login">
              Login
            </NavLink>
          </li><li className="nav-item">
            <NavLink className="nav-link" to="/main/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/user/manageuser">
              ManageUser
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/browseorganiser">
              Browse Event Organizers
            </NavLink>
          </li>
        </ul>
        {/* Left links */}
        <div className="d-flex align-items-center">
            {
              showLoggedInLinks()
            }
         
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  )
}

export default Navbar;