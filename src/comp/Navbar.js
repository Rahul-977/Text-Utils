import React from 'react'
import PropTypes from 'prop-types' // impt
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={` text-${props.textMode} navbar navbar-expand-lg bg-${props.mode} bg-body-${props.mode}`}>
  <div className="container-fluid ">
    {/* <Link className={`navbar-brand text-${props.textMode}`} to="/">{props.title}</Link> */}
    <a className={`navbar-brand text-${props.textMode}`} href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className={`nav-link active text-${props.textMode}`} aria-current="page" to="/">Home</Link> */}
          <a className={`nav-link active text-${props.textMode}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className={`nav-link text-${props.textMode}`} to="/about">About</Link> */}
          <a className={`nav-link text-${props.textMode}`} href="#">About</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.textMode}`}>
      <input onClick ={props.togglemode}  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string

}
// Navbar.defaultProps = {
//     title: 'Set Title Here'
// }