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
            Hello! I am Akshit. I'm always hungry to learn new things and love
            solving complex problems. My goal is to provide sustainable,
            scalable solutions for your company by creating beautiful, simple
            designs and coding them beautifully too. One of my favorite thing
            about what I do is creating things that live on the internet!
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
