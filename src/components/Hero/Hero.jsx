import "./hero.css";
import React from "react";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better <br />education for a better world</h1>
        <p>
          We are a team of 10 students <br />from different universities <br />and we are
          here to help you in your studies
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
