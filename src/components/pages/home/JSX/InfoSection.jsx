// src/components/InfoSection.jsx
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./InfoSection.css";
import dogDetails from '../../../../assets/dog-details_edited.png';
import cowDetails from '../../../../assets/cow-details_edited.png';
import appStore from '../../../../assets/download apple store_edited.jpg';
import playStore from '../../../../assets/download play store.png';

export function InfoSectionOne() {
  return (
    <section className="info-modern">
      <div className="info-container">
        <div className="info-images-wrapper">
          <img src={dogDetails} alt="Phone 1" className="phone-img phone-back" />
          <img src={cowDetails} alt="Phone 2" className="phone-img phone-front" />
        </div>
        
        <div className="info-text-content">
          <h2 className="reveal-text">
            Enroll your Cherished Pet with the <span>ADIS App</span> to give it a universally
            unique identification number (UID) for its lifetime
          </h2>
          <p>
            Elevate the care and affection for your forever furry companion with
            an added layer of love.
          </p>
          <div className="store-buttons-modern">
            <a href="https://apps.apple.com/in/app/adis-animal-digital-info/id1669888093" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="App Store" className="store-badge" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.adis.cows" target="_blank" rel="noopener noreferrer">
              <img src={playStore} alt="Google Play" className="store-badge" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InfoSectionTwo() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      // Hide overlay logic could go here
    }
  };

  return (
    <section className="info-section-premium">
      <div className="info-content-v2">
        <div className="text-block">
          <p>
            At ADIS Technologies, we embark on a transformative journey to usher
            in a new era of animal management. Our innovative solutions blend
            cutting-edge technology with a deep commitment to sustainability.
          </p>
          <button className="btn-explore" onClick={() => navigate('/services')}>
            Explore More
          </button>
        </div>

        <div className="video-card">
          <video
            ref={videoRef}
            src="/videos/file.mp4"
            className="video-element"
            poster="/images/dog-sofa.jpg"
          />
          <div className="video-glass-overlay">
            <h3>Welcome To ADIS</h3>
            <button className="play-circle" onClick={handlePlay}>
              <span className="play-icon">▶</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}