import React, { useState, useEffect } from "react";
import "./Services.css";
import Services1 from "./Services1";
import serviceVideo from "../../../assets/filee.mp4";
import puppyVideo from "../../../assets/puppy.mp4";

// Carousel images
import img1 from "../../../assets/11062b_eae2ed91f649411abc8de91c0fa5d15f~mv2.avif";
import img2 from "../../../assets/11062b_cb69ba81c525467f865e1ff18eacf91b~mv2.avif";
import img3 from "../../../assets/83b8dd_54d5c4a583c041ac88cdfe8cf2ba10a7~mv2.avif";
import img4 from "../../../assets/83b8dd_49ddc8ede736494e981489cbf9e6e9dd~mv2.avif";
import img5 from "../../../assets/83b8dd_11c4ff17480a46d69001593efca890ed~mv2 (1).avif";
import img6 from "../../../assets/83b8dd_9fea7965c4a84760ae2d570e95e67790~mv2.avif";
import img7 from "../../../assets/nsplsh_fb684483f96144feb459f42749197f5a~mv2.avif";

const images = [img1, img2, img3, img4, img5, img6, img7];

// Features
const features = [
  { number: "01", title: "Biometric Tagging System", description: "Utilizing a patented technology, ADIS offers a non-invasive, lifetime tagging system for animals, ensuring a secure and unique identity." },
  { number: "02", title: "Health Real-time Location Tracking", description: "Implementing IoT technology, ADIS enables real-time tracking of pets, ensuring their safety and providing peace of mind for pet owners." },
  { number: "03", title: "Collaboration with Leading Insurers", description: "ADIS collaborates with renowned insurance companies, including Bajaj Allianz, Reliance General Insurance, and SBI General Insurance, to offer comprehensive insurance services for animals." },
  { number: "04", title: "Fraud Prevention", description: "The biometric tagging system enhances security, reducing the risk of theft or fraudulent claims. This safeguard ensures that the rightful owner is accurately identified." },
  { number: "05", title: "Comprehensive Health Records", description: "ADIS provides a digital ecosystem for animal management, offering a centralized database for animal health records. This includes vaccination history, treatments, and overall health management." },
  { number: "06", title: "Automated Alerts", description: "Pet owners receive timely vaccination alerts through the ADIS system, ensuring that pets stay up-to-date with their vaccinations for optimal health." },
  { number: "07", title: "Fitbit Integration", description: "ADIS incorporates Fitbelt technology for health tracking, allowing pet owners to monitor their pet's fitness levels and overall well-being." },
];

function Services() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <section className="services-section" id="services">
      {/* Video Section */}
      <div className="services-video-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="services-video"
          src={serviceVideo}
        >
          Your browser does not support the video tag.
        </video>
        <div className="services-carousel-content">
          <h2 className="services-title">OUR <br/>SERVICES</h2>
          <p className="services-description">
            At ADIS Technologies, we embark on a transformative journey to usher in a new era of animal management. Our innovative solutions blend cutting-edge technology with a deep commitment to sustainability, ensuring a holistic approach to livestock farming.
          </p>
        </div>
      </div>

      <div className="services-container">
        {/* Carousel Section */}
        <div className="services-carousel-section">

          <div className="services-carousel">
            <div className="carousel-wrapper">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Service ${index + 1}`}
                  className={`carousel-image ${index === current ? "active" : "inactive"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="services-white-container">
        <div className="features-section">
          <div className="mock-phone-wrapper">
            <div className="phone-screen">
              <header className="phone-header-content">
                <span className="phone-logo">ADIS</span>
              </header>
              <div className="dog-content-area">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="scanned-dog-image"
                  src={puppyVideo}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="scanning-overlay"></div>
              </div>
            </div>
          </div>

          <div className="features-grid-container">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="feature-card-number">{feature.number}</span>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Benefits Section */}
      <Services1 />
    </section>
  );
}

export default Services;
