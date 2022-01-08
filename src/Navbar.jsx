import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/about" className="navbar-link">About</Link>
      <Link to="/profile" className="navbar-link">Profile</Link>
      <Link to="/login" className="navbar-link">Loign</Link>
    </nav>
  );
}

export default Navbar;
