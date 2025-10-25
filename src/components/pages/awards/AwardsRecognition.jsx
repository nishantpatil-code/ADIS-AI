import React from 'react';
import './AwardsRecognition.css';
import animalHusbandryLogo from '../../../assets/animal husbandry.avif';
import biracLogo from '../../../assets/Birac_logo_edited.avif';
import ivriLogo from '../../../assets/IVRI.avif';
import stpiLogo from '../../../assets/STPI-Logo.avif';

const AwardsRecognition = () => {
  const awards = [
    {
      number: '01',
      title: 'Winners of',
      subtitle: 'Animal Husbandry Startup Challenge STARTUP INDIA',
      description: 'Recognized for pioneering solutions in animal husbandry, achieving distinction at the 2020 Grand Challenge for advancements in livestock management.',
      logo: animalHusbandryLogo,
      logoPosition: 'left'
    },
    {
      number: '02',
      title: 'Winners of',
      subtitle: 'BIG BIRAC 17th Call 2021 INVEST INDIA',
      description: 'Secured the Biotechnology Industry Research Assistance Council (BIRAC) grant in 2021, validating our impactful contributions to biotechnology and animal welfare.',
      logo: biracLogo,
      logoPosition: 'right'
    },
    {
      number: '03',
      title: 'Winners of',
      subtitle: 'ICAR- Indian Veterinary Research Institute SAMRIDDHI  2022',
      description: 'Acknowledged by the Indian Veterinary Research Institute (IVRI) for excellence in the Samriddhi Challenge 2022, showcasing our commitment to advancing veterinary science.',
      logo: ivriLogo,
      logoPosition: 'left'
    },
    {
      number: '04',
      title: 'Winners of',
      subtitle: 'ESC-STPI Start-Up Initiative 2022',
      description: 'Awarded for our entrepreneurial prowess in reshaping the animal management landscape, honored by the Electronics and Software Export Promotion Council (ESC) and Software Technology Parks of India (STPI).',
      logo: stpiLogo,
      logoPosition: 'right'
    }
  ];

  return (
    <div className="awards-recognition">
      <section className="awards-content">
        <div className="awards-container">
          <h1 className="awards-main-title">Awards and Recognition</h1>
          
          <p className="awards-intro">
            ADIS has garnered prestigious accolades in recognition of its pioneering efforts in revolutionizing animal management. Notable honors include winning the NBEC Challenge 2023 for our groundbreaking contributions, securing the ESC-STPI Start-Up Initiative 2022, and standing out at the Samriddhi Challenge 2022 (IVRI). We proudly received the Big BIRAC Grant in 2021 and were acknowledged at the Animal Husbandry Grand Challenge 2020. Additionally, our commitment to excellence was highlighted by the Jain International Trade Organisation, Belgaum. These awards underscore ADIS's commitment to excellence, innovation, and impactful solutions in the field of digital animal management.
          </p>
        </div>

        <div className="awards-list">
          {awards.map((award, index) => (
            <div key={index} className={`award-item ${award.logoPosition === 'right' ? 'award-item-reverse' : ''}`}>
              <div className="award-logo-card">
                {award.logo ? (
                  <img src={award.logo} alt={award.subtitle} className="award-logo" />
                ) : (
                  <div className="award-logo-placeholder">Logo</div>
                )}
              </div>
              <div className="award-content-card">
                <div className="award-number">{award.number}</div>
                <h3 className="award-title">{award.title}</h3>
                <h2 className="award-subtitle">{award.subtitle}</h2>
                <p className="award-description">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AwardsRecognition;
