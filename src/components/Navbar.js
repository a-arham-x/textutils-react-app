import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

export default function Navbar(props) {

  // const [body, setBody] = useState(<TextForm heading="Enter The Text To Analyze"/>)

  // const goToHome = () => {setBody(<TextForm heading="Enter The Text To Analyze"/>)}
  // const goToAbout = () => {setBody(<About/>)}

  const buttonColors = {
    "#002D62": "btn btn-dark",
    "#8B0000": "btn btn-warning",
    "#FF4500": "btn btn-danger",
    "#4B5320": "btn btn-success"
  }

  return (
    <>
      <nav className={` navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" style={{cursor:"pointer"}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{cursor:"pointer"}}>About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className={props.search} type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="switches" style={{display:"flex"}}>
        <div className="form-check form-switch" style={{ margin: "10px" }}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        <button type="button" className={props.mode==="light"?"btn btn-primary":buttonColors[props.bg]} onClick={props.toggleDarkMode1} style={{ margin: "10px" }}>Dark Theme 1</button>
        <button type="button" className={props.mode==="light"?"btn btn-primary":buttonColors[props.bg]} onClick={props.toggleDarkMode2} style={{ margin: "10px" }}>Dark Theme 2</button>
        <button type="button" className={props.mode==="light"?"btn btn-primary":buttonColors[props.bg]} onClick={props.toggleDarkMode3} style={{ margin: "10px" }}>Dark Theme 3</button>
        <button type="button" className={props.mode==="light"?"btn btn-primary":buttonColors[props.bg]} onClick={props.toggleDarkMode4} style={{ margin: "10px" }}>Dark Theme 4</button>
      </div>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set Title Here",
  mode: "light"
}
