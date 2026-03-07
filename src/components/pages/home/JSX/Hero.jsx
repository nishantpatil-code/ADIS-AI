import "./Hero.css";
import UIButton from '../../../ui/buttons';
import dogCatImage from '../../../../assets/dog&cat.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text animate-fade-in">
          <h3 className="hero-subtitle">Welcome to ADIS...</h3>
          <h1 className="hero-title">
            Revolutionizing <br /> <span>Animal Management</span>
          </h1>
          <div className="hero-action">
             <UIButton label="Get Started" onClick={()=>{alert('Clicked')}} className="hero-btn-animated"/>
          </div>
        </div>

        <div className="hero-img animate-float">
          <div className="image-blob-bg"></div> {/* Decorative element */}
          <img src={dogCatImage} alt="Dog and Cat" />
        </div>
      </div>
    </section>
  );
}

export default Hero;