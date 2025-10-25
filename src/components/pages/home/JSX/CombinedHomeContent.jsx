import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CombinedHomeContent.css";

// Import all assets
import dogCatImage from '../../../../assets/dog&cat.png';
import dogDetails from '../../../../assets/dog-details_edited.png';
import cowDetails from '../../../../assets/cow-details_edited.png';
import appStore from '../../../../assets/download apple store_edited.jpg';
import playStore from '../../../../assets/download play store.png';
import member1 from '../../../../assets/member1.avif';
import member2 from '../../../../assets/member2.jpg';
import member3 from '../../../../assets/member3.avif';
import sbi from '../../../../assets/SBI GENERAL INSURANCE.avif';
import reliance from '../../../../assets/RELIANCE GENERAL INSURANCE.avif';
import dhanshakti from '../../../../assets/dHANSHAKTI.avif';
import bajaj from '../../../../assets/bajaj-allianz-.avif';
import gok from '../../../../assets/Government of Karnataka_edited.avif';
import nddb from '../../../../assets/NDDB DAIRY SERVICE.avif';
import baif from '../../../../assets/bAIF.avif';
import agrivijay from '../../../../assets/aGRIVIJAY.avif';
import startupIndia from '../../../../assets/STARTUP INDIA.avif';
import startupKarnataka from '../../../../assets/STARTUP KARNATAKA.avif';
import birac from '../../../../assets/BIRAC.avif';
import nvidia from '../../../../assets/nvdia.avif';
import investIndia from '../../../../assets/invest india.avif';
import ccmap from '../../../../assets/c-camp.avif';
import fullWidthImage from '../../../../assets/Screenshot 2025-10-16 102932.png';
import videoFile from '../../../../assets/file.mp4';
import petVideo from '../../../../assets/Complete Pet Identification for Responsible Pet Owners.mp4';
import adisLogo from '../../../../assets/ADIS LOGO_edited_edited_edited_edited_pn.avif';
import newsImage from '../../../../assets/cat sleeping.avif';
import { FaLinkedin } from "react-icons/fa";

function CombinedHomeContent() {
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

  const handleNewsExplore = () => {
    navigate('/news');
  };

  return (
    <div className="combined-container">
      {/* Hero Section */}
      <section className="combined-hero">
        <div className="combined-hero-content">
          <div className="combined-hero-text">
            <h3>Welcome to ADIS...</h3>
            <h1>
              Revolutionizing <br /> Animal <br/>Management
            </h1>
          </div>
          <div className="combined-hero-img">
            <img src={dogCatImage} alt="Dog and Cat" />
          </div>
        </div>
      </section>

      {/* Info Section One */}
      <section className="combined-info">
        <div className="combined-info-content">
          <div className="combined-info-images">
            <img src={dogDetails} alt="Phone 1" />
            <img src={cowDetails} alt="Phone 2" />
          </div>
          <div className="combined-info-text">
            <h2>
              Enroll your Cherished Pet with the ADIS App to give it a universally
              unique identification number (UID) for its lifetime
            </h2>
            <p>
              Elevate the care and affection for your forever furry companion with
              an added layer of love.
            </p>
            <div className="combined-store-buttons">
              <a href="https://apps.apple.com/in/app/adis-animal-digital-info/id1669888093" target="_blank" rel="noopener noreferrer">
                <img src={appStore} alt="App Store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.adis.cows" target="_blank" rel="noopener noreferrer">
                <img src={playStore} alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section Two */}
      <section className="combined-info-section">
        <div className="combined-info-section-content">
          <div className="combined-info-section-text">
            <p>
              At ADIS Technologies, we embark on a transformative journey to usher
              in a new era of animal management. Our innovative solutions blend
              cutting-edge technology with a deep commitment to sustainability,
              ensuring a holistic approach to livestock farming. Here's a glimpse
              into the world of ADIS:
            </p>
            <button className="combined-btn" onClick={handleExploreMore}>Explore More</button>
          </div>
          <div className="combined-info-video">
            <video
              ref={videoRef}
              src={petVideo}
              className="combined-video-preview"
              controls
              width="100%"
              height="400"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="combined-team">
        <div className="combined-team-content">
          <h2 className="combined-team-title">Meet Our Leadership Team</h2>
          <div className="combined-team-container">
            {/* Sujit Hukkerikar */}
            <div className="combined-team-member">
              <img src={member1} alt="Sujit Hukkerikar" className="combined-member-photo" />
              <div className="combined-member-info">
                <h3 className="combined-name">Sujit Hukkerikar</h3>
                <p className="combined-role">CEO, Co-Founder</p>
              </div>
              <a href="https://www.linkedin.com/in/sujit-hukkerikar/" target="_blank" rel="noopener noreferrer" className="combined-linkedin-link">
                <FaLinkedin className="combined-linkedin-icon" />
              </a>
              <p className="combined-description">
                Bringing over a decade of corporate expertise, including roles at HP, Autodesk and Tata Elxsi, Sujit is not just our CEO but also a seasoned dairy farming expert with more than twelve years of practical knowledge.
              </p>
            </div>

            {/* Prasad Desai */}
            <div className="combined-team-member">
              <img src={member2} alt="Prasad Desai" className="combined-member-photo" />
              <div className="combined-member-info">
                <h3 className="combined-name">Prasad Desai</h3>
                <p className="combined-role">CTO, Co-Founder</p>
              </div>
              <a href="https://www.linkedin.com/in/prasad-desai/" target="_blank" rel="noopener noreferrer" className="combined-linkedin-link">
                <FaLinkedin className="combined-linkedin-icon" />
              </a>
              <p className="combined-description">
                With a strong foundation in engineering and over eight years of software development experience, Prasad is the driving force behind the technical development of ADIS's digital solutions.
              </p>
            </div>

            {/* Ratish Pandey */}
            <div className="combined-team-member">
              <img src={member3} alt="Ratish Pandey" className="combined-member-photo" />
              <div className="combined-member-info">
                <h3 className="combined-name">Ratish Pandey</h3>
                <p className="combined-role">Business Mentor</p>
              </div>
              <a href="https://www.linkedin.com/in/ratishpandey/" target="_blank" rel="noopener noreferrer" className="combined-linkedin-link">
                <FaLinkedin className="combined-linkedin-icon" />
              </a>
              <p className="combined-description">
                A seasoned business leader with over 25 years of experience and a Chartered Accountant qualification, Ratish serves as our business mentor, bringing invaluable expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="combined-full-width-image">
        <img src={fullWidthImage} alt="ADIS Technologies" />
      </section>

      {/* Full Width Video Section */}
      <section className="combined-full-width-video">
        <div className="video-with-logo">
          <div className="logo-container">
            <img src={adisLogo} alt="ADIS Logo" className="adis-logo" />
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="full-width-video"
            src={videoFile}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Clients Section */}
      <section className="combined-clients-section">
        <div className="combined-clients-content">
          <h2 className="combined-clients-title">Our Happy Clients</h2>
          <div className="combined-clients-container">
            <div className="combined-client-logo">
              <img src={sbi} alt="SBI General Insurance" />
              <p className="combined-client-name">SBI General Insurance</p>
            </div>
            <div className="combined-client-logo">
              <img src={reliance} alt="Reliance General Insurance" />
              <p className="combined-client-name">Reliance General Insurance</p>
            </div>
            <div className="combined-client-logo">
              <img src={dhanshakti} alt="Dhanshakti" />
              <p className="combined-client-name">Dhanshakti</p>
            </div>
            <div className="combined-client-logo">
              <img src={bajaj} alt="Bajaj Allianz" />
              <p className="combined-client-name">Bajaj Allianz</p>
            </div>
            <div className="combined-client-logo">
              <img src={gok} alt="Government of Karnataka" />
              <p className="combined-client-name">Government of Karnataka</p>
            </div>
            <div className="combined-client-logo">
              <img src={nddb} alt="NDDB Dairy Service" />
              <p className="combined-client-name">NDDB Dairy Service</p>
            </div>
            <div className="combined-client-logo">
              <img src={baif} alt="BAIF" />
              <p className="combined-client-name">BAIF</p>
            </div>
            <div className="combined-client-logo">
              <img src={agrivijay} alt="AgriVijay" />
              <p className="combined-client-name">AgriVijay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="combined-partners-section">
        <div className="combined-partners-content">
          <h2 className="combined-partners-title">Partners</h2>
          <div className="combined-partners-separator"></div>
          <div className="combined-partners-container">
            <div className="combined-partner-logo">
              <img src={startupIndia} alt="Startup India" />
              <p className="combined-partner-name">Startup India</p>
            </div>
            <div className="combined-partner-logo">
              <img src={startupKarnataka} alt="Startup Karnataka" />
              <p className="combined-partner-name">Startup Karnataka</p>
            </div>
            <div className="combined-partner-logo">
              <img src={birac} alt="BIRAC" />
              <p className="combined-partner-name">BIRAC</p>
            </div>
            <div className="combined-partner-logo">
              <img src={nvidia} alt="Nvidia" />
              <p className="combined-partner-name">Nvidia</p>
            </div>
            <div className="combined-partner-logo">
              <img src={investIndia} alt="Invest India" />
              <p className="combined-partner-name">Invest India</p>
            </div>
            <div className="combined-partner-logo">
              <img src={ccmap} alt="C-CAMP" />
              <p className="combined-partner-name">C-CAMP</p>
            </div>
          </div>
        </div>
      </section>

      {/* In The News Section */}
      <section className="combined-news-section">
        <div className="combined-news-container">
          <img src={newsImage} alt="ADIS in the news" className="combined-news-image" />
          <div className="combined-news-content">
            <h2 className="combined-news-title">In The News</h2>
            <p className="combined-news-text">
              Featured in Hindustan Times, Global Prime News, Times of India, and more.
            </p>
            <button className="combined-news-button" onClick={handleNewsExplore}>Explore More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CombinedHomeContent;
