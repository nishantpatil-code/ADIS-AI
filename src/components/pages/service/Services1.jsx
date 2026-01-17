import React from "react";
import "./Services1.css";
import petImage from "../../../assets/83b8dd_9ebedfb3093e421e9b906e5a84784248_mv2-removebg-preview.png";

const features = [
  {
    number: '01',
    title: 'Secure Ownership',
    description: 'Ensure that pets are securely and uniquely identified, reducing the risk of loss or theft.',
  },
  {
    number: '02',
    title: 'Health Management',
    description: 'Empower pet owners to make informed decisions for their pet\'s well-being through comprehensive health records and fitness tracking.',
  },
  {
    number: '03',
    title: 'Safety Assurance',
    description: 'Real-time tracking brings peace of mind, allowing pet owners to monitor their pet\'s location at all times.',
  },
  {
    number: '04',
    title: 'Insurance Confidence',
    description: 'Collaboration with leading insurance companies provides comprehensive coverage and quick claims processing.',
  },
  {
    number: '05',
    title: 'Fraud Prevention',
    description: 'The biometric tagging system adds an extra layer of security, reducing the risk of fraudulent activities related to pet ownership and insurance claims.',
  },
  {
    number: '06',
    title: 'Convenience',
    description: 'Automated alerts for vaccination and integrated health tracking make it easy for pet owners to manage their pet\'s health effectively.',
  },
];

export default function Services1() {
  return (
    <div className="services-benefits-section">
      <div className="services-content-wrapper">
        <div className="services-benefits-header">
          <h2 className="services-benefits-title">How ADIS Technology Benefits Pet Owners:</h2>
          <p className="services-benefits-subtitle">
            ADIS Technologies is committed to delivering innovative solutions for animal and pet management, 
            ensuring the well-being, safety, and security of our furry companions.
          </p>
        </div>
        
        <div className="services-content-bottom">
          <div className="services-content-left">
            <div className="features-grid-container">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-card-number">{feature.number}</div>
                  <h3 className="feature-card-title">{feature.title}</h3>
                  <p className="feature-card-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="services-image-container">
            <img src={petImage} alt="ADIS" className="services-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
