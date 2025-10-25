import React from 'react';
import './News.css';
import hindustanTimesLogo from '../../../assets/hindustan-times-logo.avif';
import allAboutBelgaumLogo from '../../../assets/allaboutbelgaum-logo.avif';
import timesOfIndiaLogo from '../../../assets/times-of-india-logo.avif';
import arabLogo from '../../../assets/arabnews.webp';

function News() {
  const newsItems = [
    {
      date: '06 July 2025',
      title: 'Saudi Program Empowers Small Livestock Farmers',
      link: 'https://www.arabnews.com/node/2607106/saudi-arabia',
      logoImage: arabLogo,
      logoAlt: 'Hindustan Times'
    },
    {
      date: '11 Nov 2023',
      title: 'Reliance General Insurance Company and Animal Digital Identification System (ADIS) Join Forces to Introduce Revolutionary Animal Identity Cards',
      link: 'https://indiamediamonitor.in/ViewImg.aspx?8moKQn8dz1V5YhpG+VrCXGl8wkJ9xv6NeKNWsP7L/uvnTeQkGOYA14cLvEGj+/F/uVykjK5vOJPlJn4mWHTN81TXM/chxWakcx94N13UkmI=',
      logoImage: hindustanTimesLogo,
      logoAlt: 'Hindustan Times'
    },
    {
      date: '10 Feb 2022',
      title: 'Calling all Startups for limelight',
      link: 'https://allaboutbelgaum.com/startups/adis-technologies-sujit-hukkerikar/',
      logoImage: allAboutBelgaumLogo,
      logoAlt: 'All About Belgaum'
    },
    {
      date: '9 May 2020',
      title: 'Govt awards 12 startups for innovation in animal husbandry.',
      link: 'https://timesofindia.indiatimes.com/business/startups/trend-tracking/govt-awards-12-startups-for-innovation-in-animal-husbandry-dairy-sector/articleshow/75644341.cms',
      logoImage: timesOfIndiaLogo,
      logoAlt: 'Times of India'
    }
  ];

  return (
    <div className="news">
      {/* News Content Section */}
      <section className="news-content">
        <div className="news-container">
          <h1 className="news-main-title">Latest News</h1>
          
          <div className="news-list">
            {newsItems.map((item, index) => (
              <div key={index} className="news-item">
                <div className="news-item-content">
                  <p className="news-date">{item.date}</p>
                  <h2 className="news-title">{item.title}</h2>
                  <a href={item.link} className="news-read-more" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
                <div className="news-logo-container">
                  <img 
                    src={item.logoImage} 
                    alt={item.logoAlt} 
                    className="news-logo-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="news-logo-fallback" style={{display: 'none'}}>{item.logoAlt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;
