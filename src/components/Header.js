import React from 'react';
import '../style/Header.css'; // Import the CSS file for header styling
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
      <Link to="/">Home</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/addgymclient">Add</Link></li>
          <li><Link to="/duegymclient">Due</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
