// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import adisLogo from '../../../../assets/Adis_Logo_Vertical_Blue_RGB.png';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <Link to="/">
            <img src={adisLogo} alt="ADIS Logo" className="footer-logo" />
          </Link>
          <p className="footer-tagline">Adis Technologies Pvt Ltd</p>
        </div>

        {/* Address Section */}
        <div className="footer-section">
          <h3 className="section-title">Address</h3>
          <p>
            CTS no. 5649 AI, Bamane <br />
            Towers, Belagavi, Karnataka
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="section-title">Contact</h3>
          <p className="contact-info">
            <a href="mailto:info@adis.co.in">info@adis.co.in</a>
            <br />
            +91 876 268 8442
          </p>
        </div>

        {/* Socials Section */}
        <div className="footer-section">
          <h3 className="section-title">Socials</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/adis_tech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="icon instagram" /></a>
            <a href="https://www.facebook.com/people/ADIS-Technologies/100076316104554/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className="icon facebook" /></a>
            <a href="https://www.linkedin.com/company/adistechnologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn className="icon linkedin" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © 2024 ADIS TECHNOLOGY PVT LTD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
