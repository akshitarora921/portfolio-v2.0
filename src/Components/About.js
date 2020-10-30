import React from "react";
import Fade from "react-reveal/Fade";

import "../css/about.css";

function About() {
  return (
    <div className='about'>
      <div className='about-content'>
        <h1>
          <Fade bottom cascade>
            About.
          </Fade>
        </h1>
        <Fade bottom>
          <p>
            I am a self-taught developer who always has a hunger to learn new
            things. I am a 2020 graduate with internship experience.
          </p>
        </Fade>
      </div>
      <img
        src='https://i.postimg.cc/SKZg9gtx/IMG-20200301-183324.jpg'
        alt='aboutphoto'
      />
    </div>
  );
}

export default About;
