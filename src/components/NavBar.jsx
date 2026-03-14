import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">
          <span style={{ color: "#0080ff" }}>Cine</span>
          <span style={{ color: "#e50914" }}>Vault</span>
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;