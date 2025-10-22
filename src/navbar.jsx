import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Anumula Yashwanth Sai
        </NavLink>

        <div className="nav-links">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/projects">Projects</NavLink>
          <NavLink className="nav-link" to="/resume">Resume</NavLink>
          <NavLink className="nav-link" to="/aboutme">Contact Me</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
