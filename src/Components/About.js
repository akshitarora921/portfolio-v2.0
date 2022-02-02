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
            Hello! My name is Akshit. I am a self-taught developer who always
            has a hunger to learn new things. I enjoy solving complex problems.
            I can be relied upon to help your company achieve its goals by
            providing sustainable and scalable solutions. I design and code
            beautifully simple things, and I love what I do. <br />I enjoy
            creating things that lives on the internet.
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
