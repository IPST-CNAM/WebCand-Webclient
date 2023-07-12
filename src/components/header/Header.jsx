import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <header className="header">
          <div className="buttons-container">
            <img src="./main-logo.png" alt="Main Logo" className="logo" />
            <Link to="/home" className="button">Accueil</Link>
            <Link to="/formations" className="button">Formations</Link>
          </div>
          <Link to="/connection" className='button'>
              <img src="./user-icon.png" alt="User Icon" className="user-icon" />
          </Link>
      </header>
    </>
  );
};

export default Header;
