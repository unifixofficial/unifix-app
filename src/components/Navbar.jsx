import logo from "../assets/icon.png";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="tnc-navbar">
      <Link to="/" className="tnc-navbar-logo">
        <div className="tnc-navbar-logo-icon">
          <img src={logo} alt="UniFiX Logo" />
        </div>
        <span className="tnc-navbar-brand">
          Uni<span>FiX</span>
        </span>
      </Link>
      <ul className="tnc-navbar-links">
        <li>
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive("/about") ? "active" : ""}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/privacy" className={isActive("/privacy") ? "active" : ""}>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/terms" className={isActive("/terms") ? "active" : ""}>
            Terms
          </Link>
        </li>
        <li>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
            Contact Us
          </Link>
        </li>
        <li>
          <a
            href="https://expo.dev/accounts/unifix-official/projects/unifix/builds/9919ff63-6542-4b18-8a16-89178a7a3413"
            className="tnc-navbar-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download App
          </a>
        </li>
      </ul>
    </nav>
  );
}
