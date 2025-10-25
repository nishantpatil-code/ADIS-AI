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
    <section className="info">
      <div className="info-images">
        <img src={dogDetails} alt="Phone 1" />
        <img src={cowDetails} alt="Phone 2" />
      </div>
      <div className="info-text">
        <h2>
          Enroll your Cherished Pet with the ADIS App to give it a universally
          unique identification number (UID) for its lifetime
        </h2>
        <p>
          Elevate the care and affection for your forever furry companion with
          an added layer of love.
        </p>
        <div className="store-buttons">
          <a href="https://apps.apple.com/in/app/adis-animal-digital-info/id1669888093" target="_blank" rel="noopener noreferrer">
            <img src={appStore} alt="App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.adis.cows" target="_blank" rel="noopener noreferrer">
            <img src={playStore} alt="Google Play" />
          </a>
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
    }
  };

  const handleExploreMore = () => {
    navigate('/services');
  };

  return (
    <section className="info-section">
      <div className="info-text">
        <p>
          At ADIS Technologies, we embark on a transformative journey to usher
          in a new era of animal management. Our innovative solutions blend
          cutting-edge technology with a deep commitment to sustainability,
          ensuring a holistic approach to livestock farming. Here's a glimpse
          into the world of ADIS:
        </p>
        <button className="btn" onClick={handleExploreMore}>Explore More</button>
      </div>

      <div className="info-video">
        <video
          ref={videoRef}
          src="/videos/file.mp4"        // 👈 place your file in public/videos/
          className="video-preview"
          poster="/images/dog-sofa.jpg" // 👈 place preview image in public/images/
        />
        <div className="video-overlay">
          <h2>Welcome To ADIS</h2>
          <button className="play-btn" onClick={handlePlay}>
            ▶ Play Video
          </button>
        </div>
      </div>
    </section>
  );
}
