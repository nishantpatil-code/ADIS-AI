import React from 'react';
import './AboutDetails.css';
import logo from '../../../assets/ADIS LOGO_edited_edited_edited_edited_pn.avif';

const AboutDetails = () => {
  return (
    <section className="about-details-section">
      <div className="about-details-container">
        <div className="logo-section">
          <img src={logo} alt="ADIS Logo" className="about-details-logo" />
        </div>

        <div className="vision-mission-section">
          <h2 className="section-heading">Vision</h2>
          <p className="section-text">
            Creating a digital world with a unique identity for all animals on earth.
          </p>

          <h2 className="section-heading">Mission</h2>
          <p className="section-text">
            Digital identity for all animals on this planet and providing traceability across the animal's lifecycle.
          </p>
        </div>

        <div className="details-content">
          <p className="details-paragraph">
            In this digital world, all living beings have a digital ID. Animals are difficult to identify as the tagging is not digital and full-proof. So we set on a mission to full-proof the unique identity of animals BIOMETRICALLY and capture data w.r.t to animal health records vaccination records pedigree records and any records that help for the animal health management in a scientific way.
          </p>

          <p className="details-paragraph">
            ADIS (Animal Digital Information Systems) is an app for Animal management used to digitally manage animals based on animal biometrics. ADIS is a patented technology that can tag animals uniquely using animal biometrics and detect/authenticate livestock at any time and place. We aim to make livestock profitable, detect fraud for insurance and banking, and manage animals' health holistically with least impact on our food ecosystem.
          </p>

          <p className="details-paragraph">
            Digital data empowers the farmer to make data-based conscious decisions to improve and manage animal health, and productivity, support him to do sustainable agriculture, and enhance their profitability.
          </p>

          <p className="details-paragraph">
            We are leveraging smartphones to generate Big data for cattle on a centralized database. It works as a Pocket ERP Tool for small and big farmers. Making technology an efficient tool for linking with fintech banking, insuring cattle, Milk Forecasting, and Remote veterinary services by holistic health management for animals. It is robust in nature, as it is not hardware dependent and could be accessed by all farmers at remote Village level for all in situ management of their livestock.
          </p>

          <p className="details-paragraph">
            In summary, ADIS's innovative technology has the potential to bring about positive changes in animal management, agriculture, and environmental sustainability. By offering a biometric-based, non-invasive tagging system, ADIS empowers farmers with the data they need to make informed decisions, thereby improving the overall efficiency and sustainability of livestock farming in India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
