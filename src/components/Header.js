import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../images/Logo-Netflix.png';

const Header = () => {
  const [show, setShow] = useState(false);

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', hideHeader);
    return () => window.removeEventListener('scroll', hideHeader);
  }, []);

  return (
    <div
      className="header "
      style={{
        background: show === true ? 'transparent' : '#111',
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <Link to="/profile">
        <button>
          <i className="fa-solid fa-user "></i>
        </button>
      </Link>
    </div>
  );
};

export default Header;
