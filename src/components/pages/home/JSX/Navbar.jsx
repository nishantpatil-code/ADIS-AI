import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import adisLogo from '../../../../assets/Adis_Logo_Vertical_Blue_RGB.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    // Only toggle on mobile (when hamburger menu is active)
    if (window.innerWidth < 768) {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? '' : 'navbar-hidden'}`}>
      <div className="logo">
        <img src={adisLogo} alt="ADIS Logo" />
        <span>Digital Pashu</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={`nav-links ${menuOpen ? "menu-active" : ""}`}>
        <li className="nav-item"><NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
        <li className="nav-item"><NavLink to="/services" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>Services</NavLink></li>
        <li className="nav-item nav-item-dropdown">
          <NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
          <span className="dropdown-arrow" onClick={toggleDropdown}>{dropdownOpen ? '▲' : '▼'}</span>
          <ul className={`dropdown-menu ${dropdownOpen ? 'dropdown-open' : ''}`}>
            <li><NavLink to="/awards" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>Awards and Recognition</NavLink></li>
            <li><NavLink to="/news" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>News</NavLink></li>
          </ul>
        </li>
        <li className="nav-item"><NavLink to="/blog" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>Blog</NavLink></li>
        <li className="nav-item"><NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink></li>
        <li className="login">
          <NavLink to="/login" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="user-icon">
              <circle cx="12" cy="8" r="5"/>
              <path d="M20 21a8 8 0 1 0-16 0"/>
            </svg>
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
