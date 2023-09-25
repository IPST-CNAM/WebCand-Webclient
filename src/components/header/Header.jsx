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

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        
      </header>
    </>
  );
};

export default Header;
