import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/unnamed.webp"; 
import './Styles.css' // Update the path according to your project structure

const Header = () => {
  const linkStyle = {
    color: 'inherit',  // Inherits the color from the parent, avoiding the default blue
    textDecoration: 'none'  // Removes underline from links
  };

  return (
    <div className="Main--header">
      <div className="left--side">
        <img src={logo} alt="Logo" className="logo" />
        <div className="lists--div">
          <ul className="ulist">
            <li><Link to="/" style={linkStyle}>New</Link></li>
            <li><Link to="/saved" style={linkStyle}>Saved</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
