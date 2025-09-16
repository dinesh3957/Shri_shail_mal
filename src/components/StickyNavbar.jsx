import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StickyNavbar.css"; // import CSS file

const StickyNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="logo">
      SSMVKS
        </Link>

        {/* Desktop Menu */}
        <ul className="menu desktop-menu">
          <li><Link to="/pages">Pages</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/blocks">Blocks</Link></li>
          <li><Link to="/docs">Docs</Link></li>
        </ul>

        {/* Buttons */}
        <div className="buttons desktop-menu">
          <Link to="/login" className="login">Log In</Link>
          <Link to="/signup" className="signup">Sign In</Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <ul>
            <li><Link to="/pages" onClick={() => setOpen(false)}>Pages</Link></li>
            <li><Link to="/account" onClick={() => setOpen(false)}>Account</Link></li>
            <li><Link to="/blocks" onClick={() => setOpen(false)}>Blocks</Link></li>
            <li><Link to="/docs" onClick={() => setOpen(false)}>Docs</Link></li>
          </ul>
          <div className="mobile-buttons">
            <Link to="/login" onClick={() => setOpen(false)}>Log In</Link>
            <Link to="/signup" onClick={() => setOpen(false)} className="signup">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StickyNavbar;
