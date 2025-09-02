import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Update active link when location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="logo">
            <span className="company-name">Unique Truth Auto Limited</span>
          </Link>
        </div>

        {/* Hamburger (now separate) */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav links */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Main navigation">
          <Link 
            to="/" 
            className={activeLink === '/' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/category" 
            className={activeLink.startsWith('/category') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Category
          </Link>
          <Link 
            to="/about" 
            className={activeLink.startsWith('/about') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={activeLink.startsWith('/contact') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <Link 
            to="/product" 
            className={activeLink.startsWith('/product') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Products
          </Link>

          <form action="/search" method="get" className="search-form" role="search">
            <label htmlFor="search" className="sr-only">Search products</label>
            <input
              type="text"
              id="search"
              name="q"
              placeholder="Search parts..."
              autoComplete="off"
            />
            <button type="submit" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <div className="search-suggestions"></div>
          </form>
        </nav>
      </div>
      
      {/* Mobile menu overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </header>
  );
};

export default NavBar;
