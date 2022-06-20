import "./Navbar.css";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-logo">
        Workout App
      </Link>

      <div id="nav-buttons">
        <NavButton buttonText="Log In" page="login" />
        <NavButton buttonText="Sign Up" page="signup" />
      </div>
    </nav>
  );
}
