import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import founder1 from '../../../assets/member1.avif';
import founder2 from '../../../assets/member2.jpg';
import { FaLinkedin, FaChartLine } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';

const About = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/about-details');
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-lead">
          At ADIS Technologies, we embark on a transformative journey to usher in a new era of animal management.
          Our innovative solutions blend cutting-edge technology with a deep commitment to sustainability, ensuring a
          holistic approach to livestock farming. Here's a glimpse into the world of ADIS:
        </p>

        <div className="vmo-grid">
          <div>
            <h3 className="vmo-title">Vision:</h3>
            <p className="vmo-text">Creating a digital world with a unique identity for all animals.</p>
          </div>
          <div>
            <h3 className="vmo-title">Mission:</h3>
            <p className="vmo-text">Digital identity for all animals on this planet and providing traceability across the animal's lifecycle.</p>
          </div>
          <div>
            <h3 className="vmo-title">Objectives:</h3>
            <p className="vmo-text">Full-proof unique identity through biometrics, capturing health, vaccination, and pedigree records.</p>
          </div>
        </div>

        <button className="cta-button about-intro-button" onClick={handleReadMore}>Read More</button>
      </div>

      {/* Founders + Impact as a full-width white band */}
      <div className="full-bleed">
        <div className="about-card about-wide-card">
          <div className="founders-grid">
            <div className="founder-card">
              <img src={founder1} alt="Sujit Hukkerikar" className="founder-photo" />
              <h4 className="founder-name">Sujit Hukkerikar</h4>
              <p className="founder-role">CEO, Co-Founder</p>
              <a className="founder-linkedin" href="https://www.linkedin.com/in/sujithukkerikar/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <p className="founder-bio">
                Bringing over a decade of forward-thinking vision in AI, robotics and Data Use, Sujit led the journey from a visionary concept to a transformative reality, shaping the future of animal technology.
              </p>
            </div>
            <div className="founder-card">
              <img src={founder2} alt="Prasad Desai" className="founder-photo" />
              <h4 className="founder-name">Prasad Desai</h4>
              <p className="founder-role">CTO, Co-Founder</p>
              <a className="founder-linkedin" href="https://www.linkedin.com/in/prasad-desai/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <p className="founder-bio">
                With a strong foundation in engineering and over eight years of software development expertise, Prasad is the driving force behind our cutting-edge technology solutions.
              </p>
            </div>
          </div>

          <h2 className="impact-heading">Impact. At <span style={{color:'#73a7c6'}}>Scale <FaChartLine className="scale-icon" /></span></h2>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-icon">
                <GiCow />
              </div>
              <div className="impact-number">25000 +</div>
              <div className="impact-label">Animals Registered</div>
              <div className="impact-sublabel">That's 750000 images and 750000 videos of each</div>
            </div>
            <div className="impact-item">
              <div className="impact-icon">
                <HiUserGroup />
              </div>
              <div className="impact-number">14000+</div>
              <div className="impact-label">Active Users</div>
              <div className="impact-sublabel">In Just 3 months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
