import React from 'react';
import logo from "../images/icon3.svg";
import '../styles/Logo.css';
const Logo = () => {
    return (
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
    );
};

export default Logo;
