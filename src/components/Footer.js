import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Programs', path: '/programs' },
    { label: 'Faculty', path: '/faculty' },
    { label: 'Contact', path: '/contact' },
  ];

  const programs = [
    { label: 'Software Development', path: '/programs' },
    { label: 'Network Systems', path: '/programs' },
    { label: 'Data Analytics', path: '/programs' },
    { label: 'Applied AI', path: '/programs' },
    { label: 'BAS in IT', path: '/programs' },
  ];

  const resources = [
    { label: 'BC Online', path: '/contact' },
    { label: 'College Navigator', path: '/contact' },
    { label: 'Libraries', path: '/contact' },
    { label: 'Maps & Locations', path: '/contact' },
    { label: 'Academic Calendar', path: '/contact' },
  ];

  const getStarted = [
    { label: 'Request Information', path: '/contact' },
    { label: 'Apply Now', path: '/contact' },
    { label: 'Register for Classes', path: '/contact' },
    { label: 'Financial Aid', path: '/contact' },
    { label: 'Campus Tours', path: '/contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand & Contact */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img 
                  src="/Broward_Seahawk_head.png" 
                  alt="Broward College Seahawk" 
                  className="footer-logo-image"
                />
                <span className="footer-logo-text">
                  <span className="logo-it">IT & Engineering</span>
                  <span className="logo-bc">Broward College</span>
                </span>
              </Link>
              
              <address className="footer-address">
                <p>3501 SW Davie Road</p>
                <p>Davie, FL 33314</p>
              </address>

              <a href="tel:+19542014000" className="footer-phone">954-201-4000</a>

              <div className="footer-links-inline">
                <Link to="/contact">Contact Us</Link>
                <Link to="/contact">Maps & Locations</Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="footer-column">
              <h3>Programs</h3>
              <ul>
                {programs.map((program, index) => (
                  <li key={index}>
                    <Link to={program.path}>{program.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link to={resource.path}>{resource.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Started */}
            <div className="footer-column">
              <h3>Get Started</h3>
              <ul>
                {getStarted.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Broward College. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/contact">Privacy Policy</Link>
              <Link to="/contact">Accessibility</Link>
              <Link to="/contact">Policies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;