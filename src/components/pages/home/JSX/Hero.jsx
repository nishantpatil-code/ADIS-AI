import "./Hero.css";
import UIButton from '../../../ui/buttons';
import dogCatImage from '../../../../assets/dog&cat.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h3>Welcome to ADIS...</h3>
          <h1>
            Revolutionizing <br /> Animal Management
          </h1>
          {/* <button className="hero-btn">Get Started</button> */}
          {/* <UIButton label="Get Started" onClick={()=>{alert('Clicked')}} style={{backgroundColor : 'red'}}/> */}
        </div>

        <div className="hero-img">
          <img src={dogCatImage} alt="Dog and Cat" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
