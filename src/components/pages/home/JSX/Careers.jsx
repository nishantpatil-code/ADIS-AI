// src/components/Careers.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Careers.css";
import dog from '../../../../assets/doggg.png';

function Careers() {
  const navigate = useNavigate();

  const handleCareerClick = () => {
    navigate('/blog');
  };

  return (
    <section className="careers" id="careers">
      <div className="careers-container">
        <div className="careers-content">
          <h2>Careers</h2>

          <h3>Welcome to ADIS</h3>
          <p>
            At ADIS, we value contributions, support growth opportunities, and
            encourage teamwork. Join us in shaping the future of animal management.
          </p>

          <h3>Invest in Innovation</h3>
          <p>
            Investing in ADIS aligns with the vision of supporting technological
            advancements contributing to the efficiency and sustainability of global
            agriculture.
          </p>

          <button className="career-btn" onClick={handleCareerClick}>Learn More</button>
        </div>

        <div className="careers-image">
          <img src={dog} alt="Dog Career" />
        </div>
      </div>
    </section>
  );
}

export default Careers;
