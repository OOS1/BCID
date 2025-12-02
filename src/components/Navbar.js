import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/faculty', label: 'Faculty' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-container container" role="navigation" aria-label="Main navigation">
        <Link to="/" className="navbar-logo" aria-label="IT & Engineering Home">
          <img 
            src="/Broward_Seahawk_head.png" 
            alt="Broward College Seahawk" 
            className="logo-image"
          />
          <span className="logo-text">
            <span className="logo-title">IT & Engineering</span>
            <span className="logo-subtitle">BROWARD COLLEGE</span>
          </span>
        </Link>

        <button
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div 
          id="navbar-menu"
          className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}
          role="menubar"
        >
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path} role="none">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                  role="menuitem"
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary navbar-cta">
            Apply Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;