import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
            <NavLink className="nav-link" to="/admin/addorganizer">
              Addorganiser
            </NavLink>
          </li>
        </ul>
        {/* Left links */}
        <div className="d-flex align-items-center">
          <button type="button" className="btn btn-link px-3 me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary me-3">
            Sign up for free
          </button>
          <a
            className="btn btn-dark px-3"
            href="https://github.com/mdbootstrap/mdb-ui-kit"
            role="button"
          >
            <i className="fab fa-github" />
          </a>
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