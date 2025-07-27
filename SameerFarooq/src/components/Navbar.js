import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>Sameer Farooq</Link>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={closeMenu}>Services</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/social" className={location.pathname === '/social' ? 'active' : ''} onClick={closeMenu}>Social</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;